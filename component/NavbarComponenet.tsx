'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'


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

    return (
        <>
            <AnnouncementBar />
            <header className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-yellow-400 rounded-lg mr-2" aria-hidden="true"></div>
                        <span className="text-2xl font-bold text-gray-800">Cloudinator</span>
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
                        <Link href="#" className="text-gray-600 hover:text-gray-800">
                            About Us
                        </Link>
                    </nav>
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md font-semibold">
                            SIGN UP
                        </button>
                        <button className="border border-yellow-400 text-yellow-600 px-4 py-2 rounded-md font-semibold">
                            SIGN IN
                        </button>
                    </div>
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                            <Link href="#" className="text-gray-600 hover:text-gray-800">
                                About Us
                            </Link>
                        </nav>
                        <div className="mt-4 flex flex-col space-y-4">
                            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md font-semibold">
                                SIGN UP
                            </button>
                            <button className="border border-yellow-400 text-yellow-600 px-4 py-2 rounded-md font-semibold">
                                SIGN IN
                            </button>
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default NavBarComponent