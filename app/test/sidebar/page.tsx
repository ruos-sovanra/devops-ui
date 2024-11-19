'use client'

import * as React from "react"
import { Cog, Globe, Home, FolderClosed, Package } from 'lucide-react'
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarRail,
} from "@/components/ui/sidebar"

const navigation = [
    { name: 'Overview', href: '/overview', icon: Home },
    { name: 'Projects', href: '/projects', icon: FolderClosed },
    { name: 'Deployments', href: '/deployments', icon: Package },
    { name: 'Domains', href: '/domains', icon: Globe },
    { name: 'Settings', href: '/settings', icon: Cog },
]

export default function DashboardSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="border-b border-border p-4">
                <h2 className="text-lg font-semibold">Dashboard</h2>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {navigation.map((item) => (
                        <SidebarMenuItem key={item.name}>
                            <SidebarMenuButton asChild>
                                <a
                                    href={item.href}
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
                                >
                                    <item.icon className="h-4 w-4" />
                                    <span>{item.name}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}