'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, HardDrive, Image as ImageIcon, GitBranch, LineChart, Code, Box, Settings, Cloud } from 'lucide-react'
import Image from "next/image"
import { motion } from 'framer-motion'

export default function Component() {
    const storageFeatures = [
        {
            icon: <Database className="h-5 w-5 text-amber-500" />,
            text: "Database Backup"
        },
        {
            icon: <HardDrive className="h-5 w-5 text-amber-500" />,
            text: "Backend values backup"
        },
        {
            icon: <ImageIcon className="h-5 w-5 text-amber-500" />,
            text: "Store media"
        }
    ]

    const deploymentFeatures = [
        {
            icon: <GitBranch className="h-6 w-6 text-primary" />,
            title: "Automate your deployment process",
            description: "CI/CD pipeline is a set of automated steps that build, test, and deploy your product code."
        },
        {
            icon: <LineChart className="h-6 w-6 text-primary" />,
            title: "Monitoring your deployment",
            description: "It's important to monitor your deployments to ensure that everything is working as expected and your application is running at optimal performance. You should monitor your application metrics, logs, and errors."
        },
        {
            icon: <Code className="h-6 w-6 text-primary" />,
            title: "Code Reviews",
            description: "Code reviews are a process in which software developers review each other's code. This is done to identify and fix bugs, improve code quality, and share knowledge."
        },
        {
            icon: <Box className="h-6 w-6 text-primary" />,
            title: "Infrastructure as code (IaC)",
            description: "We use IaC to provision and manage all of our infrastructure. This allows us to automate the deployment and configuration of our infrastructure in a repeatable and efficient manner."
        },
        {
            icon: <Settings className="h-6 w-6 text-primary" />,
            title: "Containerization",
            description: "This allows us to isolate our applications from each other while sharing the underlying infrastructure, making them more portable and scalable."
        },
        {
            icon: <Cloud className="h-6 w-6 text-primary" />,
            title: "Use a cloud platform",
            description: "Cloud platforms offer a number of benefits for product deployment, including scalability, elasticity, and reliability."
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    }

    return (
        <div className="container mx-auto px-4 py-16 space-y-24">
            {/* Cloud Storage Section */}
            <motion.section
                className="grid md:grid-cols-2 gap-12 items-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div className="relative aspect-square max-w-md mx-auto" variants={itemVariants}>
                    <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Cloud Storage Illustration"
                        width={400}
                        height={400}
                        className="object-contain"
                    />
                </motion.div>
                <motion.div className="space-y-6" variants={containerVariants}>
                    <motion.h2 className="text-4xl md:text-5xl font-black tracking-tight" variants={itemVariants}>Our Cloud Storage</motion.h2>
                    <motion.p className="text-2xl font-semibold text-primary" variants={itemVariants}>
                        Cloud Storage Delivers Cost-effective, Scalable Storage
                    </motion.p>
                    <motion.p className="text-muted-foreground" variants={itemVariants}>
                        Cloud Storage enables organizations to store, access, and maintain data so that they do not need to plan and upgrade their storage infrastructure. Many businesses have a varied requirement for storage.
                    </motion.p>
                    <motion.ul className="space-y-4" variants={containerVariants}>
                        {storageFeatures.map((feature, index) => (
                            <motion.li key={index} className="flex items-center gap-3" variants={itemVariants}>
                                {feature.icon}
                                <span>{feature.text}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.section>

            {/* Deployment Approach Section */}
            <motion.section
                className="space-y-12"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h2 className="text-4xl md:text-5xl font-black tracking-tight text-center" variants={itemVariants}>Our Deployment approach</motion.h2>
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                >
                    {deploymentFeatures.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="border-2 h-full">
                                <CardHeader>
                                    <motion.div
                                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    )
}