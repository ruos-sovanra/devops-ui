'use client'

import React, { useState } from 'react'
import {GitCommit, Database, Server, Monitor, FolderTree, X, Plus, Bell, Search, Globe, Clock} from 'lucide-react'

type Project = {
    id: number
    name: string
    status: string
    url: string
    lastDeployed: string
    services: string[]
    subWorkspaces: string[]
    env: Record<string, string>
}

type ServiceData = {
    [key: string]: {
        [key: string]: string
    } | undefined
    frontend?: {
        framework: string
        deploymentUrl: string
    }
    backend?: {
        language: string
        port: string
    }
    database?: {
        type: string
        connectionString: string
    }
    subWorkspace?: {
        parentWorkspace: string
        environment: string
    }
}

const initialProjects: Project[] = [
    {
        id: 1,
        name: 'E-commerce Platform',
        status: 'Production',
        url: 'https://ecommerce.example.com',
        lastDeployed: '2 hours ago',
        services: ['frontend', 'backend', 'database'],
        subWorkspaces: ['Staging', 'Development'],
        env: {
            API_KEY: '****',
            DATABASE_URL: '****'
        }
    },
    {
        id: 2,
        name: 'Blog API',
        status: 'Development',
        url: 'https://api-dev.example.com',
        lastDeployed: '1 day ago',
        services: ['backend', 'database'],
        subWorkspaces: ['Testing'],
        env: {
            PORT: '3000',
            NODE_ENV: 'development'
        }
    },
]

export default function WorkspacePage() {
    const [projects, setProjects] = useState<Project[]>(initialProjects)
    const [activeFilters, setActiveFilters] = useState<string[]>([])
    const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false)
    const [selectedServices, setSelectedServices] = useState<string[]>([])
    const [serviceData, setServiceData] = useState<ServiceData>({})

    const handleFilterClick = (filter: string) => {
        setActiveFilters(prev =>
            prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        )
    }

    const handleServiceToggle = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service)
                ? prev.filter(s => s !== service)
                : [...prev, service]
        )
    }

    const handleServiceDataChange = (service: string, field: string, value: string) => {
        setServiceData(prev => ({
            ...prev,
            [service]: {
                ...prev[service],
                [field]: value
            }
        }))
    }

    const handleNewProject = (e: React.FormEvent) => {
        e.preventDefault()
        const newProject: Project = {
            id: projects.length + 1,
            name: `New Project ${projects.length + 1}`,
            status: 'Development',
            url: `https://newproject${projects.length + 1}.example.com`,
            lastDeployed: 'Just created',
            services: selectedServices,
            subWorkspaces: serviceData.subWorkspace ? [serviceData.subWorkspace.environment] : [],
            env: {}
        }
        setProjects([...projects, newProject])
        setIsNewProjectModalOpen(false)
        setSelectedServices([])
        setServiceData({})
    }

    const filteredProjects = projects.filter(project => {
        if (activeFilters.length === 0) return true
        return activeFilters.some(filter =>
            filter === 'subWorkspace'
                ? project.subWorkspaces.length > 0
                : project.services.includes(filter)
        )
    })

    const renderServiceInputs = (service: string) => {
        switch (service) {
            case 'frontend':
                return (
                    <div className="space-y-4 mt-4 p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-2">
                            <Label htmlFor="framework">Framework</Label>
                            <Input
                                id="framework"
                                placeholder="e.g., Next.js, React, Vue"
                                value={serviceData.frontend?.framework || ''}
                                onChange={(e) => handleServiceDataChange('frontend', 'framework', e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="deploymentUrl">Deployment URL</Label>
                            <Input
                                id="deploymentUrl"
                                placeholder="e.g., https://myapp.com"
                                value={serviceData.frontend?.deploymentUrl || ''}
                                onChange={(e) => handleServiceDataChange('frontend', 'deploymentUrl', e.target.value)}
                            />
                        </div>
                    </div>
                )
            case 'backend':
                return (
                    <div className="space-y-4 mt-4 p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-2">
                            <Label htmlFor="language">Programming Language</Label>
                            <Input
                                id="language"
                                placeholder="e.g., Node.js, Python, Java"
                                value={serviceData.backend?.language || ''}
                                onChange={(e) => handleServiceDataChange('backend', 'language', e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="port">Port</Label>
                            <Input
                                id="port"
                                placeholder="e.g., 3000"
                                value={serviceData.backend?.port || ''}
                                onChange={(e) => handleServiceDataChange('backend', 'port', e.target.value)}
                            />
                        </div>
                    </div>
                )
            case 'database':
                return (
                    <div className="space-y-4 mt-4 p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-2">
                            <Label htmlFor="dbType">Database Type</Label>
                            <Input
                                id="dbType"
                                placeholder="e.g., PostgreSQL, MongoDB"
                                value={serviceData.database?.type || ''}
                                onChange={(e) => handleServiceDataChange('database', 'type', e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="connectionString">Connection String</Label>
                            <Input
                                id="connectionString"
                                placeholder="Database connection string"
                                type="password"
                                value={serviceData.database?.connectionString || ''}
                                onChange={(e) => handleServiceDataChange('database', 'connectionString', e.target.value)}
                            />
                        </div>
                    </div>
                )
            case 'subWorkspace':
                return (
                    <div className="space-y-4 mt-4 p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-2">
                            <Label htmlFor="parentWorkspace">Parent Workspace</Label>
                            <Input
                                id="parentWorkspace"
                                placeholder="e.g., Production, Development"
                                value={serviceData.subWorkspace?.parentWorkspace || ''}
                                onChange={(e) => handleServiceDataChange('subWorkspace', 'parentWorkspace', e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="environment">Environment</Label>
                            <Input
                                id="environment"
                                placeholder="e.g., Staging, Testing"
                                value={serviceData.subWorkspace?.environment || ''}
                                onChange={(e) => handleServiceDataChange('subWorkspace', 'environment', e.target.value)}
                            />
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 p-4">
                    <div className="flex items-center justify-between max-w-6xl mx-auto">
                        <div className="flex-1 max-w-xl mx-auto">
                            <div className="relative">
                                <input
                                    type="search"
                                    placeholder="Search projects..."
                                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 rounded-full hover:bg-gray-100">
                                <Bell size={20} />
                            </button>
                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                <span className="text-sm font-medium text-purple-700">JD</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto">
                    <div className="max-w-6xl mx-auto px-4 py-6">
                        {/* Title and Actions */}
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
                            <Button onClick={() => setIsNewProjectModalOpen(true)}>
                                <Plus size={20} className="inline mr-2"/>
                                New Project
                            </Button>
                        </div>

                        {/* Filter Section */}
                        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                            <div className="flex flex-wrap gap-2">
                                {[
                                    {id: 'frontend', icon: <Monitor size={16}/>},
                                    {id: 'backend', icon: <Server size={16}/>},
                                    {id: 'database', icon: <Database size={16}/>},
                                    {id: 'subWorkspace', icon: <FolderTree size={16}/>}
                                ].map(({id, icon}) => (
                                    <Button
                                        key={id}
                                        variant={activeFilters.includes(id) ? "default" : "outline"}
                                        className="inline-flex items-center px-3 py-1.5 text-sm"
                                        onClick={() => handleFilterClick(id)}
                                    >
                                        {icon}
                                        <span className="ml-2 capitalize">{id}</span>
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                project.status === 'Production'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                        {project.status}
                    </span>
                                        </div>

                                        <div className="space-y-3">
                                            <p className="text-sm text-gray-500 flex items-center">
                                                <Globe size={16} className="mr-2"/>
                                                {project.url}
                                            </p>
                                            <p className="text-sm text-gray-500 flex items-center">
                                                <Clock size={16} className="mr-2"/>
                                                {project.lastDeployed}
                                            </p>

                                            <div>
                                                <p className="text-sm font-medium text-gray-700 mb-2">Services</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.services.map((service, index) => (
                                                        <span
                                                            key={index}
                                                            className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium"
                                                        >
                                    {service === 'frontend' && <Monitor size={12} className="mr-1"/>}
                                                            {service === 'backend' &&
                                                                <Server size={12} className="mr-1"/>}
                                                            {service === 'database' &&
                                                                <Database size={12} className="mr-1"/>}
                                                            {service}
                                </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {project.subWorkspaces.length > 0 && (
                                                <div>
                                                    <p className="text-sm font-medium text-gray-700 mb-2">Sub-workspaces</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.subWorkspaces.map((workspace, index) => (
                                                            <span
                                                                key={index}
                                                                className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium"
                                                            >
                                        <FolderTree size={12} className="mr-1"/>
                                                                {workspace}
                                    </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        className="border-t border-gray-100 p-4 bg-gray-50 flex justify-between items-center">
                                        <button className="text-sm font-medium text-purple-600 hover:text-purple-700">
                                            Environment Variables
                                        </button>
                                        <Button variant="default"
                                                className="inline-flex items-center px-3 py-1.5 text-sm">
                                            <GitCommit size={14} className="mr-1.5"/>
                                            Deploy
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>

            {/* New Project Modal */}
            {isNewProjectModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Create New Project</h2>
                            <button onClick={() => setIsNewProjectModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700">
                                <X size={24}/>
                            </button>
                        </div>

                        <form onSubmit={handleNewProject} className="space-y-6">
                            <div className="space-y-2">
                                <Label>Services</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        { id: 'frontend', label: 'Frontend', icon: Monitor },
                                        { id: 'backend', label: 'Backend', icon: Server },
                                        { id: 'database', label: 'Database', icon: Database },
                                        { id: 'subWorkspace', label: 'SubWorkspace', icon: FolderTree }
                                    ].map(({ id, label, icon: Icon }) => (
                                        <Button
                                            key={id}
                                            type="button"
                                            variant={selectedServices.includes(id) ? "default" : "outline"}
                                            className="flex items-center justify-center gap-2 h-auto py-3"
                                            onClick={() => handleServiceToggle(id)}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span>{label}</span>
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {selectedServices.map(service => renderServiceInputs(service))}

                            <Button type="submit" className="w-full">
                                Create Project
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

function Label({htmlFor, children}: { htmlFor?: string, children: React.ReactNode }) {
    return (
        <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
            {children}
        </label>
    )
}

function Input({id, placeholder, type = "text", value, onChange}: {
    id: string,
    placeholder: string,
    type?: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
    )
}

function Button({children, type = "button", variant = "default", className, onClick}: {
    children: React.ReactNode,
    type?: "button" | "submit" | "reset",
    variant?: "default" | "outline",
    className?: string,
    onClick?: () => void
}) {
    const baseStyles = "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
    const variantStyles = variant === "default"
        ? "bg-purple-600 text-white hover:bg-purple-700"
        : "border border-gray-300 text-gray-700 hover:bg-gray-50"

    return (
        <button
            type={type}
            className={`${baseStyles} ${variantStyles} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}