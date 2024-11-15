export default function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-800 relative">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UyZThmMCIgb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>

            {/* Content */}
            <div className="relative z-10">
                {/* Announcement Bar */}
                <div className="bg-blue-100 py-2 px-4 text-center text-blue-800">
                    <span className="bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">New</span>
                    We have released the new feature <a href="#" className="text-blue-600 hover:underline">Let get Start →</a>
                </div>

                {/* Header */}
                <header className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-yellow-400 rounded-lg mr-2"></div>
                        <span className="text-2xl font-bold text-gray-800">AutomateX</span>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-gray-800">Feature & Service</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Document</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Start Building</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">About Us</a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md font-semibold">SIGN UP</button>
                        <button className="border border-yellow-400 text-yellow-600 px-4 py-2 rounded-md font-semibold">SIGN IN</button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-5xl font-bold mb-4 text-gray-900">
                            Say Goodbye<br />
                            To <span className="text-blue-600">Manual.</span>
                        </h1>
                        <p className="mb-6 text-gray-600">
                            At AutomateX we are on a mission to revolutionize the way you work. With AutomateX, you can say goodbye to manual tasks.
                        </p>
                        <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-semibold">Start Deploy</button>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="w-64 h-64 bg-blue-200 bg-opacity-50 rounded-full absolute top-0 right-0 -mr-16 -mt-16"></div>
                        <div className="w-64 h-64 bg-yellow-200 bg-opacity-50 rounded-full absolute bottom-0 left-0 -ml-16 -mb-16"></div>
                        <img src="/placeholder.svg?height=300&width=400" alt="Automation Illustration" className="relative z-10" />
                    </div>
                </main>

                {/* Features Section */}
                <section className="bg-gray-100 py-16 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Explore The Benefit of The Features</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Unique and Powerful suit of software to run and entire, brought to you by a company with the long term version to transform the way you work.
                    </p>
                </section>
            </div>
        </div>
    )
}