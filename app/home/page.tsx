'use client'

import { useState, useMemo } from 'react'
import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion'
import { Cloud, Laptop, Server, Menu, X } from 'lucide-react'
import {Button} from "@/component/ui/button/Button";

const navItems = ['Service', 'Document', 'Start deploy', 'About us']

const IconGrid = () => {
    const icons = useMemo(() => [Server, Cloud, Laptop, Server], [])

    return (
        <div className="relative grid grid-cols-2 gap-8 p-8">
            {icons.map((Icon, index) => (
                <motion.div
                    key={index}
                    className="flex items-center justify-center bg-white rounded-2xl shadow-lg p-6"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Icon className="h-16 w-16 text-blue-600" />
                </motion.div>
            ))}
        </div>
    )
}

export default function Component() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(200,210,255,0.3),transparent)]" />
            </div>

            {/* Navigation */}
            <nav className="relative z-10 flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <Cloud className="h-8 w-8 text-blue-600" />
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Cloudinator
          </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link key={item} className="text-sm font-medium hover:text-blue-600 transition-colors" href={`#${item.toLowerCase().replace(' ', '-')}`}>
                            {item}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="outline" className="hidden md:inline-flex text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                        Register
                    </Button>
                    <Button>Login</Button>
                    <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute inset-x-0 top-20 bg-white border-b border-gray-200 z-20"
                    >
                        {navItems.map((item) => (
                            <Link key={item}
                                  className="block py-2 px-4 text-sm hover:bg-gray-100 transition-colors"
                                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                                  onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <main className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                            Automate Deployment your Application with MicroDecksOps Pro
                        </h1>
                        <p className="text-xl text-gray-600">
                            We can deploy platform, application by one click only
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                                Documentation
                            </Button>
                            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                                Deploy now
                            </Button>
                        </div>
                    </motion.div>

                    {/* Interactive Illustration */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="aspect-square">
                            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl animate-pulse" />
                            <IconGrid />
                        </div>
                        <motion.div
                            className="absolute inset-0 border-2 border-blue-400 rounded-full"
                            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                </div>
            </main>
        </div>
    )
}