'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ReactNode } from 'react'

interface ServiceSectionProps {
    title: string
    description: string
    icon: ReactNode
    align?: 'left' | 'right'
}

const ServiceSection = ({ title, description, icon, align = 'left' }: ServiceSectionProps) => (
    <motion.div
        className={`flex flex-col ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-16`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                See More
            </Button>
        </div>
        <motion.div
            className="w-full md:w-1/2 flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {icon}
        </motion.div>
    </motion.div>
)

const FullServiceDeploymentIcon = () => (
    <svg className="w-64 h-64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="40" width="160" height="120" rx="10" fill="#E5E7EB"/>
        <rect x="30" y="50" width="140" height="90" rx="5" fill="#F3F4F6"/>
        <rect x="40" y="60" width="50" height="30" rx="2" fill="#60A5FA"/>
        <rect x="100" y="60" width="60" height="30" rx="2" fill="#34D399"/>
        <rect x="40" y="100" width="120" height="30" rx="2" fill="#FBBF24"/>
    </svg>
)

const PersonalCloudStorageIcon = () => (
    <svg className="w-64 h-64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" fill="#E5E7EB"/>
        <path d="M70 120C70 97.91 87.91 80 110 80C132.09 80 150 97.91 150 120" stroke="#9CA3AF" strokeWidth="6"/>
        <circle cx="110" cy="90" r="20" fill="#60A5FA"/>
        <path d="M85 140C85 129.507 93.5066 121 104 121H116C126.493 121 135 129.507 135 140" stroke="#9CA3AF" strokeWidth="6"/>
    </svg>
)

const PrivateGitServerIcon = () => (
    <svg className="w-64 h-64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 20L180 160H20L100 20Z" fill="#FBBF24"/>
    </svg>
)

const MicroserviceDeploymentIcon = () => (
    <svg className="w-64 h-64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="70" height="70" rx="8" fill="#60A5FA"/>
        <rect x="110" y="20" width="70" height="70" rx="8" fill="#34D399"/>
        <rect x="20" y="110" width="70" height="70" rx="8" fill="#F472B6"/>
        <rect x="110" y="110" width="70" height="70" rx="8" fill="#FBBF24"/>
        <path d="M90 55H110M90 145H110M55 90V110M145 90V110" stroke="#4B5563" strokeWidth="4"/>
    </svg>
)

export default function Component() {
    return (
        <div className="min-h-screen container mx-auto bg-gray-50 text-gray-800 p-8">
            <motion.h1
                className="text-4xl font-bold text-center mb-16 text-blue-600"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Service
            </motion.h1>

            <ServiceSection
                title="Full Service Deployment"
                description="Say goodbye to manual and error-prone deployment processes. Our service automates the deployment of your application, ensuring consistency across all components of your application stack."
                icon={<FullServiceDeploymentIcon />}
            />

            <ServiceSection
                title="Personal Cloud Storage"
                description="Our Cloud Storage service provides a secure and user-friendly platform for storing your important data. With advanced encryption and easy accessibility, you can safely store your documents, photos, and files."
                icon={<PersonalCloudStorageIcon />}
                align="right"
            />

            <ServiceSection
                title="Private Git Server"
                description="Take full control of your Git repositories. Our Private Git Server empowers you to securely manage and version control your source code and projects within your own infrastructure."
                icon={<PrivateGitServerIcon />}
            />

            <ServiceSection
                title="Microservice Deployment"
                description="Streamline your application architecture with our Microservice Deployment solution. We help you break down your monolithic applications into scalable, independently deployable services for improved flexibility and easier maintenance."
                icon={<MicroserviceDeploymentIcon />}
                align="right"
            />
        </div>
    )
}