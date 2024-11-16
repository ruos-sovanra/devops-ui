'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Lottie from 'react-lottie'
import { Menu, X } from 'lucide-react'
import server from '@/public/hero.json'

const AnnouncementBar = () => (
    <div className="bg-blue-100 py-2 px-4 text-center text-blue-800">
        <span className="bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">New</span>
        We have released the new feature{' '}
        <Link href="#" className="text-blue-600 hover:underline">
            Let get started →
        </Link>
    </div>
)

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
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
    )
}

const LottieAnimation = () => {
    const serverAnimation = useMemo(() => ({
        loop: true,
        autoplay: true,
        animationData: server,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }), [])

    return <Lottie options={serverAnimation} />
}

export default function Home() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className="min-h-screen bg-white text-gray-800 relative">
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"/>
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(200,210,255,0.3),transparent)]"/>

            <div className="relative z-10">
                <AnnouncementBar/>
                <Header/>

                <main className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                                Say Goodbye<br/>
                                To <span className="text-blue-600">Manual.</span>
                            </h1>
                            <p className="mb-6 text-gray-600">
                                At AutomateX we are on a mission to revolutionize the way you work. With AutomateX, you
                                can say goodbye to manual tasks.
                            </p>
                            <button
                                className="w-full md:w-auto bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-semibold">
                                Start Deploy
                            </button>
                        </div>
                        <div className="md:w-1/2 relative">
                            {isClient ? (
                                <LottieAnimation/>
                            ) : (
                                <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg"></div>
                            )}
                        </div>
                    </div>
                </main>

                <section className="bg-gray-100 py-16 px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Explore The Benefit of The
                        Features</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Unique and Powerful suite of software to run an entire, brought to you by a company with the
                        long term vision to transform the way you work.
                    </p>
                </section>
            </div>
        </div>
    )
}