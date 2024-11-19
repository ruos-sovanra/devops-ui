'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { CuboidIcon, LayoutDashboardIcon, ScanIcon, NetworkIcon, LucideIcon } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

type Feature = {
    title: string
    description: string
    icon: LucideIcon
}

const features: Feature[] = [
    {
        title: "Integrated Platform",
        description: "Seamlessly connect all components of your business with our state-of-the-art integrated platform, ensuring real-time data flow and enhanced collaboration.",
        icon: CuboidIcon
    },
    {
        title: "Personal Dashboard",
        description: "Customize your workspace with a personal profile that provides at-a-glance insights and quick access to your most important tools and metrics.",
        icon: LayoutDashboardIcon
    },
    {
        title: "Scanning Technology",
        description: "Utilize cutting-edge scanning technology to digitize documents, automate data entry, and streamline your workflow with unparalleled accuracy.",
        icon: ScanIcon
    },
    {
        title: "Microservices Deployment",
        description: "Scale your application effortlessly with our microservices architecture, allowing for independent deployment and maintenance of individual components.",
        icon: NetworkIcon
    },
]

const FeatureIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
    </div>
)

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 })
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-6 rounded-xl bg-gradient-to-br from-background/50 to-background border border-muted shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
        >
            <FeatureIcon icon={feature.icon} />
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                {feature.title}
            </h3>
            <p className="text-muted-foreground">{feature.description}</p>
        </motion.div>
    )
}

export default function FeatureSection() {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 })
        }
    }, [controls, inView])

    return (
        <section className="container mx-auto py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-background/80 overflow-hidden">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text inline-block">
                        Explore The Benefits of Our Features
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                        Unique and powerful suite of software to run your entire business, brought to you by a company with the long-term
                        vision to transform the way you work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}