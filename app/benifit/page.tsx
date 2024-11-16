'use client'

import { motion } from 'framer-motion'
import { Settings, Users, Shield } from 'lucide-react'
import { Card } from "@/components/ui/card"

const FeatureCard = ({
                         icon: Icon,
                         title,
                         description
                     }: {
    icon: typeof Settings
    title: string
    description: string
}) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    >
        <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group">
            <motion.div
                className="size-16 rounded-lg bg-[#9333EA] flex items-center justify-center mb-6 group-hover:bg-[#2979FF] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Icon className="size-8 text-white" />
            </motion.div>
            <motion.h3
                className="text-2xl font-bold mb-4 text-[#9333EA] group-hover:text-[#2979FF] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
            >
                {title}
            </motion.h3>
            <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
        </Card>
    </motion.div>
)

export default function Component() {
    const features = [
        {
            icon: Settings,
            title: "Integrated platform",
            description: "This integration enables seamless communication and interaction between different components have access to the most up-to-date information, promoting efficiency and collaboration."
        },
        {
            icon: Users,
            title: "Personal Dashboard",
            description: "User dashboards ensuring that individuals only see information and features relevant to their roles within an organization, enhancing productivity and user experience."
        },
        {
            icon: Shield,
            title: "Scanning Technology",
            description: "Double scanning protocol entails subjecting your application scanning processes to minimizing the chances of any potential vulnerabilities going undetected, ensuring robust security."
        }
    ]

    return (
        <div className="py-24 container mx-auto">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4 relative inline-block">
                        <span className="text-[#9333EA]">Explore The Benefit of The Features</span>
                        <motion.div
                            className="absolute bottom-0 left-0 w-full h-1 bg-[#2979FF]"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
                        Unique and Powerful suite of software to run your entire business,
                        brought to you by a company with the long-term vision to transform the way you work.
                    </p>
                </motion.div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </div>
    )
}