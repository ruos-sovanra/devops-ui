'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, ChevronLeft, Folder, Globe, Home, Settings } from 'lucide-react'
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarTrigger,
    useSidebar,
} from '@/components/ui/sidebar'

const navItems = [
    { icon: Home, label: 'Overview', href: '/profile' },
    { icon: Folder, label: 'Projects', href: '/project' },
    { icon: Box, label: 'Deployments', href: '/deployment' },
    { icon: Globe, label: 'Domains', href: '/domain' },
    { icon: Settings, label: 'Settings', href: '/setting' },
]

export default function DashboardSidebar() {
    const pathname = usePathname()
    const { state } = useSidebar()

    return (
        <Sidebar collapsible="icon" className="border-r border-border bg-background hidden md:flex" aria-label="Main Navigation">
            <SidebarHeader className="h-14 flex items-center justify-between px-3 border-b">
                <div className="flex items-center gap-2">

                    {state !== "collapsed" && (
                        <>
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                <span className="text-sm font-bold text-primary-foreground">C</span>
                            </div>
                            <span className="font-semibold text-sm">Cloudinator</span>
                        </>
                    )}
                    <SidebarTrigger aria-label={state === "collapsed" ? "Expand sidebar" : "Collapse sidebar"}>
                        <ChevronLeft className="h-4 w-4 text-muted-foreground" aria-hidden="true"/>
                    </SidebarTrigger>
                </div>

            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {navItems.map((item) => (
                        <SidebarMenuItem key={item.href}>
                            <SidebarMenuButton
                                asChild
                                isActive={pathname === item.href}
                                tooltip={state === "collapsed" ? item.label : undefined}
                            >
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-3"
                                    aria-current={pathname === item.href ? "page" : undefined}
                                >
                                    <item.icon className="h-4 w-4" aria-hidden="true" />
                                    <span>{item.label}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}