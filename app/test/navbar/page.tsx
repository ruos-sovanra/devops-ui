'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from "next/image"
import logo from '@/public/logo.png'

const AnnouncementBar = () => (
    <div className="bg-blue-100 py-2 px-4 text-center text-blue-800">
        <span className="bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">New</span>
        We have released the new feature{' '}
        <a href="#" className="text-blue-600 hover:underline">
            Let get started →
        </a>
    </div>
)

const NavBarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const announcementHeight = document.querySelector('.announcement-bar')?.clientHeight || 0
            setIsSticky(window.scrollY > announcementHeight)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <div className="announcement-bar">
                <AnnouncementBar />
            </div>
            <header className={`bg-white z-50 ${isSticky ? 'fixed top-0 left-0 right-0' : ''}`}>
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Link href={"/public"}>
                                <Image src={logo} alt="Cloudinator" width={100} height={100}
                                       className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"/>
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            <Link href="#" className="text-gray-600 hover:text-gray-800">
                                Feature & Service
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-gray-800">
                                Document
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-gray-800">
                                Start Building
                            </Link>
                            <Link href={"/about"} className="text-gray-600 hover:text-gray-800">
                                About Us
                            </Link>
                        </nav>
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold">
                                <Link href={"/sign-up"}>SIGN UP</Link>
                            </button>
                            <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md font-semibold">
                                <Link href={"/login"}>SIGN IN</Link>
                            </button>
                        </div>
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                    {isMenuOpen && (
                        <div className="md:hidden mt-4">
                            <nav className="flex flex-col space-y-4">
                                <Link href="#" className="text-gray-600 hover:text-gray-800">
                                    Feature & Service
                                </Link>
                                <Link href="#" className="text-gray-600 hover:text-gray-800">
                                    Document
                                </Link>
                                <Link href="#" className="text-gray-600 hover:text-gray-800">
                                    Start Building
                                </Link>
                                <Link href={"/about"} className="text-gray-600 hover:text-gray-800">
                                    About Us
                                </Link>
                            </nav>
                            <div className="mt-4 flex flex-col space-y-4">
                                <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold">
                                    <Link href={"/sign-up"}>SIGN UP</Link>
                                </button>
                                <button
                                    className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md font-semibold">
                                    <Link href={"/login"}>SIGN IN</Link>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            {isSticky && <div style={{ height: '80px' }} />} {/* Placeholder to prevent content jump */}
        </>
    )
}

export default NavBarComponent