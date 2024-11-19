'use client'

import { useState } from 'react'
import { GitHubLogoIcon, FileIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import {FolderIcon} from "lucide-react";

type FileStructure = {
    name: string
    type: 'file' | 'folder'
    children?: FileStructure[]
}

export default function CreateProject() {
    const [repoUrl, setRepoUrl] = useState('')
    const [repoType, setRepoType] = useState('github')
    const [projectName, setProjectName] = useState('')
    const [projectStructure, setProjectStructure] = useState<FileStructure | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/clone-repo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ repoUrl }),
            })

            if (!response.ok) {
                throw new Error('Failed to fetch project structure')
            }

            const data = await response.json()
            setProjectStructure(data.structure)
        } catch (err) {
            setError('Failed to fetch project structure. Please check the repository URL and try again.')
            console.error('Error fetching project structure:', err)
        } finally {
            setIsLoading(false)
        }
    }

    const renderFileStructure = (structure: FileStructure, depth = 0) => {
        return (
            <div key={structure.name} style={{ marginLeft: `${depth * 20}px` }}>
                {structure.type === 'folder' ? (
                    <FolderIcon className="inline-block mr-2" />
                ) : (
                    <FileIcon className="inline-block mr-2" />
                )}
                {structure.name}
                {structure.children && (
                    <div>
                        {structure.children.map(child => renderFileStructure(child, depth + 1))}
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Create New Project</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                    <CardDescription>Enter your repository details to create a new project.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="projectName">Project Name</Label>
                            <Input
                                id="projectName"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                placeholder="Enter project name"
                            />
                        </div>
                        <div>
                            <Label htmlFor="repoType">Repository Type</Label>
                            <Select value={repoType} onValueChange={setRepoType}>
                                <SelectTrigger id="repoType">
                                    <SelectValue placeholder="Select repository type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="github">
                                        <div className="flex items-center">
                                            <GitHubLogoIcon className="mr-2" />
                                            GitHub
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="gitlab">
                                        <div className="flex items-center">
                                            <GitHubLogoIcon className="mr-2" />
                                            GitLab
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="repoUrl">Repository URL</Label>
                            <Input
                                id="repoUrl"
                                value={repoUrl}
                                onChange={(e) => setRepoUrl(e.target.value)}
                                placeholder="Enter repository URL"
                            />
                        </div>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? <Spinner className="mr-2" /> : null}
                            Create Project
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {error && (
                <Card className="mt-8 bg-red-50 border-red-200">
                    <CardContent className="text-red-600 py-4">{error}</CardContent>
                </Card>
            )}

            {projectStructure && (
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Project Structure</CardTitle>
                        <CardDescription>Overview of your project file structure.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted p-4 rounded-md">
                            {renderFileStructure(projectStructure)}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}