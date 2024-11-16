// const FeatureSection = () => (
//     <div className="bg-gray-50">
//         <section className="py-16 md:py-24">
//             <div className="container mx-auto px-4">
//                 <div className="text-center space-y-6 max-w-3xl mx-auto">
//                     <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                         Explore The Benefit of The Features
//                     </h2>
//                     <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
//                         Unique and powerful suite of software to run your entire business, brought to you by a company
//                         with the
//                         long term vision to transform the way you work.
//                     </p>
//                 </div>
//             </div>
//         </section>
//
//         <section className="py-16 md:py-24">
//             <div className="container mx-auto px-4">
//                 <div className="space-y-24">
//                     {/* First Service */}
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div className="relative order-2 md:order-1">
//                             <div
//                                 className="aspect-square max-w-lg w-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-3xl">
//                                 <div
//                                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-2">
//                                     <div className="w-8 h-8 bg-blue-500 rounded-sm"></div>
//                                     <div className="w-8 h-8 bg-green-500 rounded-sm"></div>
//                                     <div className="w-8 h-8 bg-yellow-400 rounded-sm"></div>
//                                     <div className="w-8 h-8 bg-black rounded-sm"></div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="space-y-6 order-1 md:order-2">
//                             <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                                 Full Service Deployment
//                             </h2>
//                             <p className="text-gray-600 text-lg leading-relaxed">
//                                 Say goodbye to manual and error-prone deployment processes. Our Service
//                                 automates the deployment of frontend code, backend service, database, and all
//                                 other components of your application stack.
//                             </p>
//                             <button
//                                 className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium transition-colors">
//                                 See More
//                             </button>
//                         </div>
//                     </div>
//
//                     {/* Second Service */}
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div className="space-y-6">
//                             <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                                 Continuous Integration
//                             </h2>
//                             <p className="text-gray-600 text-lg leading-relaxed">
//                                 Streamline your development workflow with our robust CI/CD pipeline.
//                                 Automatically build, test, and deploy your code changes with confidence,
//                                 ensuring high-quality releases every time.
//                             </p>
//                             <button
//                                 className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium transition-colors">
//                                 See More
//                             </button>
//                         </div>
//                         <div className="relative">
//                             <div
//                                 className="aspect-square max-w-lg w-full bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 rounded-3xl">
//                                 <div
//                                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-2">
//                                     <div className="w-8 h-8 bg-purple-500 rounded-sm"></div>
//                                     <div className="w-8 h-8 bg-pink-500 rounded-sm"></div>
//                                     <div className="w-8 h-8 bg-orange-400 rounded-sm"></div>
//                                     <div className="w-8 h-8 bg-gray-900 rounded-sm"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//
//                     {/* Third Service */}
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div className="relative order-2 md:order-1">
//                             <div
//                                 className="aspect-square max-w-lg w-full bg-gradient-to-br from-green-200 via-teal-200 to-blue-200 rounded-3xl">
//                                 <div
//                                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-2">
//                                     <div className="w-8 h-8 bg-green-500 rounded-sm"></div>
//                                     <div className="w-8 h-8 bg-teal-500 rounded-sm"></div>
//                                     <div className="w-8 h-8 bg-blue-400 rounded-sm"></div>
//                                     <div className="w-8 h-8 bg-gray-800 rounded-sm"></div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="space-y-6 order-1 md:order-2">
//                             <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
//                                 Scalable Infrastructure
//                             </h2>
//                             <p className="text-gray-600 text-lg leading-relaxed">
//                                 Build and manage your applications on our cutting-edge cloud infrastructure.
//                                 Designed for high performance and seamless scalability, our platform adapts
//                                 to your needs, from startups to enterprise-level operations.
//                             </p>
//                             <button
//                                 className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium transition-colors">
//                                 See More
//                             </button>
//                         </div>
//                     </div>
//
//                     {/* Fourth Service */}
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div className="space-y-6">
//                             <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
//                                 24/7 Monitoring & Support
//                             </h2>
//                             <p className="text-gray-600 text-lg leading-relaxed">
//                                 Rest easy knowing your applications are in good hands. Our round-the-clock
//                                 monitoring and expert support team ensure optimal performance, quick issue
//                                 resolution, and proactive maintenance for your peace of mind.
//                             </p>
//                             <button
//                                 className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium transition-colors">
//                                 See More
//                             </button>
//                         </div>
//                         <div className="relative">
//                             <div
//                                 className="aspect-square max-w-lg w-full bg-gradient-to-br from-red-200 via-orange-200 to-yellow-200 rounded-3xl">
//                                 <div
//                                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-2">
//                                     <div className="w-8 h-8 bg-red-500 rounded-sm"></div>
//                                     <div className="w-8 h-8 bg-orange-500 rounded-sm"></div>
//                                     <div className="w-8 h-8 bg-yellow-400 rounded-sm"></div>
//                                     <div className="w-8 h-8 bg-gray-700 rounded-sm"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </div>
// )
//
// export default FeatureSection

'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {CuboidIcon, LayoutDashboardIcon, ScanIcon, NetworkIcon, LucideIcon} from 'lucide-react'

type FeatureIconProps = {
    icon: LucideIcon;
}

const FeatureIcon = ({ icon: Icon }: FeatureIconProps) => (
    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
    </div>
);

const icons = [CuboidIcon, LayoutDashboardIcon, ScanIcon, NetworkIcon]

export default function FeatureSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const features = [
        {
            title: "Integrated Platform",
            description:
                "Seamlessly connect all components of your business with our state-of-the-art integrated platform, ensuring real-time data flow and enhanced collaboration.",
        },
        {
            title: "Personal Dashboard",
            description:
                "Customize your workspace with a personal dashboard that provides at-a-glance insights and quick access to your most important tools and metrics.",
        },
        {
            title: "Scanning Technology",
            description:
                "Utilize cutting-edge scanning technology to digitize documents, automate data entry, and streamline your workflow with unparalleled accuracy.",
        },
        {
            title: "Microservices Deployment",
            description:
                "Scale your application effortlessly with our microservices architecture, allowing for independent deployment and maintenance of individual components.",
        },
    ]

    return (
        <section className="container mx-auto py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-background/80 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text inline-block">
                        Explore The Benefit of The Features
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                        Unique and Powerful suite of software to run your entire business, brought to you by a company with the long-term
                        vision to transform the way you work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-6 rounded-xl bg-gradient-to-br from-background/50 to-background border border-muted shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                        >
                            <FeatureIcon icon={icons[index]} />
                            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}