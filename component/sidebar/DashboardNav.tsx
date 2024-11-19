'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, Folder, Globe, Home, Settings } from 'lucide-react'

const navItems = [
    { icon: Home, label: 'Overview', href: '/overview' },
    { icon: Folder, label: 'Projects', href: '/projects' },
    { icon: Box, label: 'Deployments', href: '/deployments' },
    { icon: Globe, label: 'Domains', href: '/domains' },
    { icon: Settings, label: 'Settings', href: '/settings' },
]

export function DashboardNav() {
    const pathname = usePathname()

    return (
        <nav className="space-y-1">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                        pathname === item.href
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:bg-muted'
                    }`}
                >
                    <item.icon className="mr-3 h-6 w-6" aria-hidden="true" />
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}