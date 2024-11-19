'use client'

import React from 'react'
import { ChevronRight, Calendar, GitBranch, GitCommit, ExternalLink, Settings, Eye, Activity, EyeOff, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

type ProjectData = {
    id: number
    name: string
    description: string
    status: 'Active' | 'Completed' | 'On Hold'
    startDate: string
    endDate: string
    repository: string
    recentCommits: {
        hash: string
        message: string
        author: string
        date: string
    }[]
    deployRecords: {
        id: number
        version: string
        date: string
        status: 'success' | 'failure'
        environment: string
    }[]
    environments: { [key: string]: string }
}

const projectData: ProjectData = {
    id: 1,
    name: "E-commerce Platform Redesign",
    description: "A complete overhaul of our e-commerce platform with improved UI/UX, faster checkout process, and enhanced product recommendations.",
    status: "Active",
    startDate: "2023-03-15",
    endDate: "2023-09-30",
    repository: "https://github.com/ruos-sovanra/devops-ui.git",
    recentCommits: [
        { hash: "a1b2c3d", message: "Implement new product carousel", author: "Mike Johnson", date: "2023-06-15" },
        { hash: "e4f5g6h", message: "Optimize checkout flow", author: "John Doe", date: "2023-06-14" },
        { hash: "i7j8k9l", message: "Add unit tests for recommendation engine", author: "Sarah Brown", date: "2023-06-13" },
    ],
    deployRecords: [
        { id: 1, version: "v1.2.3", date: "2023-06-15 14:30", status: "success", environment: "production" },
        { id: 2, version: "v1.2.2", date: "2023-06-10 10:15", status: "success", environment: "staging" },
        { id: 3, version: "v1.2.1", date: "2023-06-05 09:45", status: "failure", environment: "development" },
    ],
    environments: {
        API_KEY: "your-api-key-here",
        DATABASE_URL: "postgres://username:password@host:5432/database",
        REDIS_URL: "redis://username:password@host:6379",
    },
}

export default function ProjectDetailPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <a href="#" className="hover:underline">Projects</a>
                    <ChevronRight className="mx-2 h-4 w-4" />
                    <span>{projectData.name}</span>
                </div>
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{projectData.name}</h1>
                        <p className="text-muted-foreground mb-4">{projectData.description}</p>
                    </div>
                    <Button>
                        <Settings className="mr-2 h-4 w-4" />
                        Project Settings
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Project Status</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Project Preview"
                                className="object-cover"
                                fill
                            />
                        </div>
                        <div className="flex justify-between gap-2">
                            <Button className="flex-1">
                                <GitBranch className="h-4 w-4 mr-2" />
                                Deploy
                            </Button>
                            <Button variant="outline" className="flex-1">
                                <EyeOff className="h-4 w-4 mr-2" />
                                Disable
                            </Button>
                            <Button variant="destructive" className="flex-1">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Monitoring</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Activity className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">Uptime</span>
                                </div>
                                <Badge variant="outline">99.9%</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Activity className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">Response Time</span>
                                </div>
                                <Badge variant="outline">120ms</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Activity className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">Error Rate</span>
                                </div>
                                <Badge variant="outline">0.1%</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Repository</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <GitBranch className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">main</span>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                                <a href={projectData.repository} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    View on GitHub
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="overview" className="mb-8">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="environment">Environment</TabsTrigger>
                    <TabsTrigger value="deployments">Deployments</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Commits</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {projectData.recentCommits.map((commit, index) => (
                                    <div key={index} className="flex items-start">
                                        <GitCommit className="mr-2 h-4 w-4 mt-1 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm font-medium">{commit.message}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {commit.author} committed {commit.date}
                                            </p>
                                            <p className="text-xs text-muted-foreground">{commit.hash}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="environment">
                    <Card>
                        <CardHeader>
                            <CardTitle>Environment Variables</CardTitle>
                            <CardDescription>
                                Manage environment variables for your project.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {Object.entries(projectData.environments).map(([key, value]) => (
                                    <div key={key} className="flex items-center space-x-2">
                                        <Label htmlFor={key} className="w-1/3">{key}</Label>
                                        <Input
                                            id={key}
                                            value={value}
                                            className="w-2/3"
                                        />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="deployments">
                    <Card>
                        <CardHeader>
                            <CardTitle>Deploy Records</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Version</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Environment</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {projectData.deployRecords.map((record) => (
                                        <TableRow key={record.id}>
                                            <TableCell>{record.version}</TableCell>
                                            <TableCell>{record.date}</TableCell>
                                            <TableCell>
                                                <Badge variant={record.status === 'success' ? 'default' : 'destructive'}>
                                                    {record.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{record.environment}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="preview">
                    <Card>
                        <CardHeader>
                            <CardTitle>Project Preview</CardTitle>
                            <CardDescription>
                                Preview your project in different environments.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Button variant="outline">
                                        <Eye className="mr-2 h-4 w-4" />
                                        Preview Production
                                    </Button>
                                    <Button variant="outline">
                                        <Eye className="mr-2 h-4 w-4" />
                                        Preview Staging
                                    </Button>
                                    <Button variant="outline">
                                        <Eye className="mr-2 h-4 w-4" />
                                        Preview Development
                                    </Button>
                                </div>
                                <div className="border-2 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
                                    <p className="text-muted-foreground">Preview will be displayed here</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="settings">
                    <Card>
                        <CardHeader>
                            <CardTitle>Project Settings</CardTitle>
                            <CardDescription>
                                Manage your project settings and configurations.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="projectName">Project Name</Label>
                                        <Input id="projectName" value={projectData.name} />
                                    </div>
                                    <div>
                                        <Label htmlFor="projectStatus">Project Status</Label>
                                        <select id="projectStatus" className="w-full p-2 border rounded-md">
                                            <option>Active</option>
                                            <option>Completed</option>
                                            <option>On Hold</option>
                                        </select>
                                    </div>
                                    <div>
                                        <Label htmlFor="startDate">Start Date</Label>
                                        <Input id="startDate" type="date" value={projectData.startDate} />
                                    </div>
                                    <div>
                                        <Label htmlFor="endDate">End Date</Label>
                                        <Input id="endDate" type="date" value={projectData.endDate} />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="projectDescription">Project Description</Label>
                                    <textarea
                                        id="projectDescription"
                                        className="w-full p-2 border rounded-md"
                                        rows={4}
                                        value={projectData.description}
                                    ></textarea>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Settings</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}