'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, ChevronLeft, Folder, Globe, Home, Menu, Settings } from 'lucide-react'

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarTrigger,
    SidebarProvider,
    useSidebar,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'

const navItems = [
    { icon: Home, label: 'Overview', href: '/overview' },
    { icon: Folder, label: 'Projects', href: '/projects' },
    { icon: Box, label: 'Deployments', href: '/deployments' },
    { icon: Globe, label: 'Domains', href: '/domains' },
    { icon: Settings, label: 'Settings', href: '/settings' },
]

function MobileHeader() {
    const { toggleSidebar, open: sidebarOpen } = useSidebar()

    return (
        <header className="h-14 border-b flex items-center gap-2 px-4 sticky top-0 bg-background md:hidden">
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                aria-label="Toggle navigation menu"
                aria-expanded={sidebarOpen}
            >
                <Menu className="h-5 w-5" aria-hidden="true" />
            </Button>
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">C</span>
                </div>
                <span className="font-semibold text-sm">Cloudinator</span>
            </div>
        </header>
    )
}

function DashboardSidebar() {
    const pathname = usePathname()
    const { state } = useSidebar()

    return (
        <Sidebar collapsible="icon" className="border-r border-border bg-background hidden md:flex" aria-label="Main Navigation">
            <SidebarHeader className="h-14 flex items-center justify-between px-3 border-b">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-sm font-bold text-primary-foreground">C</span>
                    </div>
                    {state !== "collapsed" && (
                        <span className="font-semibold text-sm">Cloudinator</span>
                    )}
                </div>
                <SidebarTrigger aria-label={state === "collapsed" ? "Expand sidebar" : "Collapse sidebar"}>
                    <ChevronLeft className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </SidebarTrigger>
            </SidebarHeader>
            <SidebarContent>
                <nav aria-label="Main Navigation">
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
                </nav>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className="flex h-screen">
                <DashboardSidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <MobileHeader />
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}