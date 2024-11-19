'use client'

import React, { useState, useCallback } from 'react'
import { GitlabIcon as GitHubLogoIcon, GitlabIcon as GitLabLogoIcon, ChevronRight, File, Folder, Code, X } from 'lucide-react'
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
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

type FileStructure = {
    name: string
    type: 'file' | 'folder'
    content?: string
    children?: FileStructure[]
}

export default function CreateProject() {
    const [repoUrl, setRepoUrl] = useState('')
    const [repoType, setRepoType] = useState('github')
    const [projectName, setProjectName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [showPreview, setShowPreview] = useState(false)
    const [projectStructure, setProjectStructure] = useState<FileStructure | null>(null)
    const [openFiles, setOpenFiles] = useState<string[]>([])
    const [selectedFile, setSelectedFile] = useState<string | null>(null)
    const [fileContents, setFileContents] = useState<Record<string, string>>({})

    const handlePreview = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)
        setProjectStructure(null)
        setFileContents({})

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

            // Store file contents
            const contents: Record<string, string> = {}
            const storeContents = (node: FileStructure) => {
                if (node.type === 'file' && node.content) {
                    contents[node.name] = node.content
                }
                node.children?.forEach(storeContents)
            }
            storeContents(data.structure)
            setFileContents(contents)

            setShowPreview(true)
        } catch (err) {
            setError('Failed to fetch project structure. Please check the repository URL and try again.')
            console.error('Error fetching project structure:', err)
        } finally {
            setIsLoading(false)
        }
    }

    const handleCreate = async () => {
        console.log('Creating project:', projectName)
        setRepoUrl('')
        setProjectName('')
        setShowPreview(false)
        setProjectStructure(null)
        setOpenFiles([])
        setSelectedFile(null)
        setFileContents({})
    }

    const handleFileClick = useCallback((file: FileStructure) => {
        if (file.type === 'file') {
            if (!openFiles.includes(file.name)) {
                setOpenFiles(prev => [...prev, file.name])
            }
            setSelectedFile(file.name)
        }
    }, [openFiles])

    const handleCloseFile = useCallback((fileName: string, e?: React.MouseEvent) => {
        e?.stopPropagation()
        setOpenFiles(prev => prev.filter(name => name !== fileName))
        setSelectedFile(prev => prev === fileName ? null : prev)
    }, [])

    const FileTree = useCallback(({ structure, depth = 0 }: { structure: FileStructure, depth?: number }) => {
        const [isOpen, setIsOpen] = useState(false)

        if (structure.type === 'file') {
            return (
                <div
                    className={cn(
                        "flex items-center gap-2 py-1 px-2 cursor-pointer hover:bg-accent rounded-sm",
                        selectedFile === structure.name && "bg-accent"
                    )}
                    style={{ paddingLeft: `${depth * 16}px` }}
                    onClick={() => handleFileClick(structure)}
                >
                    <File className="h-4 w-4" />
                    <span className="text-sm">{structure.name}</span>
                </div>
            )
        }

        return (
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger className="w-full">
                    <div
                        className="flex items-center gap-2 py-1 px-2 hover:bg-accent rounded-sm"
                        style={{ paddingLeft: `${depth * 16}px` }}
                    >
                        <ChevronRight className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")} />
                        <Folder className="h-4 w-4" />
                        <span className="text-sm">{structure.name}</span>
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {structure.children?.map((item, index) => (
                        <FileTree key={index} structure={item} depth={depth + 1} />
                    ))}
                </CollapsibleContent>
            </Collapsible>
        )
    }, [handleFileClick, selectedFile])

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Create New Project</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                    <CardDescription>Enter your repository details to create a new project.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handlePreview} className="space-y-4">
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
                                            <GitHubLogoIcon className="mr-2 h-4 w-4" />
                                            GitHub
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="gitlab">
                                        <div className="flex items-center">
                                            <GitLabLogoIcon className="mr-2 h-4 w-4" />
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
                            {isLoading ? 'Loading...' : 'Preview Project'}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {error && (
                <Card className="mt-8 bg-destructive/10 border-destructive/20">
                    <CardContent className="py-4">
                        <p className="text-destructive font-semibold">Error:</p>
                        <p className="text-destructive">{error}</p>
                    </CardContent>
                </Card>
            )}

            {showPreview && projectStructure && (
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Project Preview</CardTitle>
                        <CardDescription>Review your project structure before creating.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex h-[600px] border rounded-lg">
                            <div className="w-64 overflow-auto p-2 border-r">
                                <FileTree structure={projectStructure} />
                            </div>
                            <div className="flex-1 overflow-hidden">
                                {openFiles.length > 0 ? (
                                    <Tabs value={selectedFile || undefined} className="flex flex-col h-full">
                                        <div className="border-b">
                                            <TabsList className="p-0 h-auto">
                                                {openFiles.map(fileName => (
                                                    <TabsTrigger
                                                        key={fileName}
                                                        value={fileName}
                                                        className="data-[state=active]:bg-background relative px-4 py-2"
                                                        onClick={() => setSelectedFile(fileName)}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <Code className="h-4 w-4" />
                                                            {fileName}
                                                            <span
                                                                className="ml-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                                                onClick={(e) => handleCloseFile(fileName, e)}
                                                            >
                                <X className="h-3 w-3" />
                                <span className="sr-only">Close</span>
                              </span>
                                                        </div>
                                                    </TabsTrigger>
                                                ))}
                                            </TabsList>
                                        </div>
                                        {openFiles.map(fileName => (
                                            <TabsContent
                                                key={fileName}
                                                value={fileName}
                                                className="flex-1 overflow-auto"
                                            >
                                                <SyntaxHighlighter
                                                    language="typescript"
                                                    style={vscDarkPlus}
                                                    customStyle={{
                                                        margin: 0,
                                                        padding: '1rem',
                                                        fontSize: '0.875rem',
                                                        lineHeight: '1.25rem',
                                                    }}
                                                >
                                                    {fileContents[fileName] || 'No content available'}
                                                </SyntaxHighlighter>
                                            </TabsContent>
                                        ))}
                                    </Tabs>
                                ) : (
                                    <div className="flex items-center justify-center h-full text-muted-foreground">
                                        Select a file to view its contents
                                    </div>
                                )}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleCreate}>Create Project</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    )
}