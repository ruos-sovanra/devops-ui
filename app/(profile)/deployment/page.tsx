'use client'

import { useState, useMemo } from "react"
import { CheckCircle, Clock, Plus, RefreshCw, XCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

type Deployment = {
    id: number
    project: string
    environment: string
    status: 'Success' | 'In Progress' | 'Failed'
    commit: string
    author: string
    timestamp: string
}

const initialDeployments: Deployment[] = [
    { id: 1, project: 'Main Website', environment: 'Production', status: 'Success', commit: 'a1b2c3d', author: 'John Doe', timestamp: '2023-06-15 14:30' },
    { id: 2, project: 'API service', environment: 'Staging', status: 'In Progress', commit: 'e4f5g6h', author: 'Jane Smith', timestamp: '2023-06-15 15:45' },
    { id: 3, project: 'Mobile App', environment: 'Development', status: 'Failed', commit: 'i7j8k9l', author: 'Bob Johnson', timestamp: '2023-06-15 16:20' },
]

export default function DeploymentPage() {
    const [deployments, setDeployments] = useState<Deployment[]>(initialDeployments)
    const [search, setSearch] = useState("")
    const [statusFilter, setStatusFilter] = useState<Deployment['status'] | 'All'>('All')

    const filteredDeployments = useMemo(() => {
        return deployments.filter(deployment =>
            (deployment.project.toLowerCase().includes(search.toLowerCase()) ||
                deployment.author.toLowerCase().includes(search.toLowerCase())) &&
            (statusFilter === 'All' || deployment.status === statusFilter)
        )
    }, [deployments, search, statusFilter])

    const StatusBadge = ({ status }: { status: Deployment['status'] }) => {
        const config = {
            'Success': { color: 'bg-green-100 text-green-800', icon: CheckCircle },
            'In Progress': { color: 'bg-blue-100 text-blue-800', icon: RefreshCw },
            'Failed': { color: 'bg-red-100 text-red-800', icon: XCircle },
        }[status] || { color: 'bg-gray-100 text-gray-800', icon: Clock }

        const Icon = config.icon

        return (
            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full items-center ${config.color}`}>
        <Icon className="h-4 w-4 mr-1" />
                {status}
      </span>
        )
    }

    return (
        <div className="p-12 container mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Deployments</h1>
                <Button>
                    <Plus className="h-5 w-5 mr-2"/>
                    New Deployment
                </Button>
            </div>

            <div className="flex justify-between items-center mb-4">
                <Input
                    placeholder="Search projects or authors..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            Status: {statusFilter} <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={() => setStatusFilter('All')}>All</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setStatusFilter('Success')}>Success</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setStatusFilter('In Progress')}>In Progress</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setStatusFilter('Failed')}>Failed</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Project</TableHead>
                            <TableHead>Environment</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Commit</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Timestamp</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredDeployments.map((deployment) => (
                            <TableRow key={deployment.id}>
                                <TableCell className="font-medium">{deployment.project}</TableCell>
                                <TableCell>{deployment.environment}</TableCell>
                                <TableCell><StatusBadge status={deployment.status} /></TableCell>
                                <TableCell>{deployment.commit}</TableCell>
                                <TableCell>{deployment.author}</TableCell>
                                <TableCell>{deployment.timestamp}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}