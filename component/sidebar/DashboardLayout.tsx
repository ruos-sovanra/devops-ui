'use client'

import * as React from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import DashboardSidebar from './DashboardSidebar'
import MobileHeader from './MobileHeader'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className="flex h-screen">
                <DashboardSidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <MobileHeader />
                    <main className="flex-1 overflow-y-auto p-4">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}