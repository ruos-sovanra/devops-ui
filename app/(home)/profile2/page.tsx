'use client'

import { useState, useEffect } from 'react'
import { Folder, Box, Globe, Settings, ChevronLeft, ChevronRight, Home, Bell, Search } from 'lucide-react'
import ProjectPage from "@/component/profile/ProjectPage"
import SettingPage from "@/component/profile/SettingPage"
import DomainPage from "@/component/profile/DomainPage"
import DeploymentPage from "@/component/profile/DeploymentPage"

export default function Dashboard() {
    const [activePage, setActivePage] = useState('overview')
    const [isExpanded, setIsExpanded] = useState(true)
    const [notifications, setNotifications] = useState(3)

    useEffect(() => {
        const handleResize = () => {
            setIsExpanded(window.innerWidth > 768)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const NavItem = ({ icon: Icon, label, page }: { icon: React.ComponentType, label: string, page: string }) => (
    <button
        onClick={() => setActivePage(page)}
        className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
    ${activePage === page
            ? 'bg-blue-100 text-blue-600'
            : 'hover:bg-gray-100 text-gray-700 hover:text-blue-600'}`}
    >
        <Icon className={`h-5 w-5 ${activePage === page ? 'text-blue-600' : 'text-gray-500'}`} />
        {isExpanded && <span className="transition-opacity duration-300">{label}</span>}
    </button>
)

    return (
        <div className="">
            <div className={`flex-1 transition-all duration-300 ease-in-out ${isExpanded ? 'ml-64' : 'ml-20'}`}>
                {/* Top Navigation */}
                <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                            <Search className="h-5 w-5 text-gray-500" />
                        </button>
                        <input
                            type="search"
                            placeholder="Search..."
                            className="bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
                            <Bell className="h-5 w-5 text-gray-500" />
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0
                                </span>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                            JD
                        </div>
                    </div>
                </div>

                {/* Page Content */}
                <div className="p-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Overview</h2>
                        <p>Welcome to your dashboard overview. Here you can see a summary of your projects, deployments,
                            and recent activity.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
