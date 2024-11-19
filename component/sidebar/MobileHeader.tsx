'use client'

import * as React from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'

export default function MobileHeader() {
    const { toggleSidebar, open: sidebarOpen } = useSidebar()

    return (
        <header className="h-14 border-b flex items-center gap-2 px-4 sticky top-0 bg-background md:hidden">
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                aria-label={sidebarOpen ? "Close navigation menu" : "Open navigation menu"}
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