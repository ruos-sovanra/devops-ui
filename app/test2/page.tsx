'use client'

import { useState } from 'react'
import { Folder, Box, Activity, Globe, BarChart, Settings, Search, Bell, Plus, RefreshCw, XCircle, CheckCircle, Clock } from 'lucide-react'

export default function DeploymentPage() {


    const NavItem = ({ icon: Icon, label, isActive = false }: { icon: any, label: string, isActive?: boolean }) => (
        <button
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
        ${isActive ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
        >
            <Icon className="h-4 w-4 text-gray-600" />
            <span className="text-gray-700">{label}</span>
        </button>
    )



    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4">
                {/* Logo */}
                <div className="mb-8">
                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                </div>

                {/* Navigation */}
                <nav className="space-y-1">
                    <NavItem icon={Folder} label="Projects" />
                    <NavItem icon={Box} label="Deployments" isActive />
                    <NavItem icon={Activity} label="Activity" />
                    <NavItem icon={Globe} label="Domains" />
                    <NavItem icon={BarChart} label="Usage" />
                    <NavItem icon={Settings} label="Settings" />
                </nav>
            </div>

            {/* Main Content */}
            <div className="ml-64">
                {/* Top Navigation */}
                <div className="border-b bg-white">
                    <div className="flex items-center justify-between px-8 py-4">
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <input
                                    type="search"
                                    placeholder="Search deployments..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                        <nav className="flex items-center space-x-8">
                            <button className="text-gray-600 font-medium">Account</button>
                            <button className="text-gray-600 font-medium">Notifications</button>
                            <button className="text-gray-600 font-medium">Billing</button>
                            <button className="text-gray-600 font-medium">Teams</button>
                            <button className="text-gray-600 font-medium">Integrations</button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <Bell className="h-5 w-5 text-gray-600" />
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Deployment Management Content */}

            </div>
        </div>
    )
}