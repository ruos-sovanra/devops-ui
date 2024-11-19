'use client'

import { useState, useMemo } from "react"
import { ExternalLink, Plus, Trash2, Search, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {toast} from "@/hooks/use-toast";


type Domain = {
    id: number
    name: string
    status: 'Active' | 'Pending'
    type: 'Primary' | 'Alias' | 'Subdomain'
}

const initialDomains: Domain[] = [
    { id: 1, name: 'example.com', status: 'Active', type: 'Primary' },
    { id: 2, name: 'test.com', status: 'Pending', type: 'Alias' },
    { id: 3, name: 'myapp.dev', status: 'Active', type: 'Subdomain' },
]

export default function DomainPage() {
    const [domains, setDomains] = useState<Domain[]>(initialDomains)
    const [newDomain, setNewDomain] = useState('')
    const [search, setSearch] = useState('')
    const [isAddingDomain, setIsAddingDomain] = useState(false)

    const filteredDomains = useMemo(() => {
        return domains.filter(domain =>
            domain.name.toLowerCase().includes(search.toLowerCase())
        )
    }, [domains, search])

    const addDomain = (e: React.FormEvent) => {
        e.preventDefault()
        if (newDomain) {
            const domainExists = domains.some(domain => domain.name.toLowerCase() === newDomain.toLowerCase())
            if (domainExists) {
                toast({
                    title: "Domain already exists",
                    description: "Please enter a unique domain name.",
                    variant: "destructive",
                })
                return
            }
            setDomains([...domains, { id: domains.length + 1, name: newDomain, status: 'Pending', type: 'Alias' }])
            setNewDomain('')
            setIsAddingDomain(false)
            toast({
                title: "Domain added",
                description: `${newDomain} has been added successfully.`,
            })
        }
    }

    const removeDomain = (id: number) => {
        setDomains(domains.filter(domain => domain.id !== id))
        toast({
            title: "Domain removed",
            description: "The domain has been removed successfully.",
        })
    }

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Domains</h1>

            <div className="flex justify-between items-center mb-6">
                <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Search domains..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-8 w-64"
                    />
                </div>
                <Dialog open={isAddingDomain} onOpenChange={setIsAddingDomain}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="h-5 w-5 mr-2" />
                            Add Domain
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Domain</DialogTitle>
                            <DialogDescription>
                                Enter the domain you want to add to your project.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={addDomain}>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Domain
                                    </Label>
                                    <Input
                                        id="name"
                                        value={newDomain}
                                        onChange={(e) => setNewDomain(e.target.value)}
                                        className="col-span-3"
                                        placeholder="example.com"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Add Domain</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Domain</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredDomains.map((domain) => (
                            <TableRow key={domain.id}>
                                <TableCell className="font-medium">{domain.name}</TableCell>
                                <TableCell>
                                    <Badge variant={domain.status === 'Active' ? "success" : "warning"}>
                                        {domain.status === 'Active' ? (
                                            <CheckCircle className="h-4 w-4 mr-1" />
                                        ) : (
                                            <AlertCircle className="h-4 w-4 mr-1" />
                                        )}
                                        {domain.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{domain.type}</TableCell>
                                <TableCell>
                                    <div className="flex space-x-2">
                                        <Button variant="ghost" size="sm">
                                            <ExternalLink className="h-4 w-4" />
                                            <span className="sr-only">View domain</span>
                                        </Button>
                                        <Button variant="ghost" size="sm" onClick={() => removeDomain(domain.id)}>
                                            <Trash2 className="h-4 w-4" />
                                            <span className="sr-only">Remove domain</span>
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}