'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Gift, Server, TestTube, Rocket, Cloud } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Component() {
    const [currentStep, setCurrentStep] = useState(0)
    const steps = ['Develop', 'Commit', 'Test', 'Build', 'Deploy', 'Monitor']
    const icons = [Code, Gift, TestTube, Server, Rocket, Cloud]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentStep((prevStep) => (prevStep + 1) % steps.length)
        }, 3000) // Change step every 3 seconds

        return () => clearInterval(timer)
    }, [])

    const lineVariants = {
        hidden: { pathLength: 0 },
        visible: (i: number) => ({
            pathLength: i <= currentStep ? 1 : 0,
            transition: { duration: 0.5, ease: 'easeInOut' }
        })
    }

    const nodeVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i: number) => ({
            scale: i <= currentStep ? 1 : 0,
            opacity: i <= currentStep ? 1 : 0,
            transition: { duration: 0.3, ease: 'easeInOut' }
        })
    }

    return (
        <div className="w-full max-w-4xl place-content-center h-screen mx-auto p-8 relative bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-8 text-purple-700">DevOps Workflow</h2>

            <svg viewBox="0 0 800 100" className="w-full h-auto" style={{ minHeight: '100px' }}>
                {/* Main horizontal line */}
                <motion.path
                    d="M 50,50 H 750"
                    stroke="#E9D5FF"
                    strokeWidth="2"
                    fill="none"
                />

                {/* Animated path segments */}
                {[0, 1, 2, 3, 4].map((i) => (
                    <motion.path
                        key={i}
                        d={`M ${50 + i * 140},50 H ${190 + i * 140}`}
                        stroke="#9333EA"
                        strokeWidth="4"
                        fill="none"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                    />
                ))}

                {/* Nodes */}
                {steps.map((step, i) => {
                    const Icon = icons[i]
                    return (
                        <motion.g key={i} variants={nodeVariants} initial="hidden" animate="visible" custom={i}>
                            <circle cx={50 + i * 140} cy="50" r="24" fill="#9333EA" />
                            <foreignObject x={50 + i * 140 - 12} y="38" width="24" height="24">
                                <Icon className="w-6 h-6 text-white" />
                            </foreignObject>
                            <text x={50 + i * 140} y="90" textAnchor="middle" fill="#4B5563" className="text-sm">
                                {step}
                            </text>
                        </motion.g>
                    )
                })}
            </svg>

            <div className="mt-8 text-center">
                <Button
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => setCurrentStep((prevStep) => (prevStep + 1) % steps.length)}
                >
                    Next Step
                </Button>
            </div>

            <div className="mt-4 p-4 bg-white rounded shadow">
                <h3 className="font-semibold text-lg mb-2 text-purple-700">{steps[currentStep]}</h3>
                <p className="text-gray-600">
                    {getStepDescription(currentStep)}
                </p>
            </div>
        </div>
    )
}

function getStepDescription(step: number): string {
    switch (step) {
        case 0:
            return "Developers write and modify code in their local environment."
        case 1:
            return "Code changes are committed to version control (e.g., Git)."
        case 2:
            return "Automated tests are run to ensure code quality and functionality."
        case 3:
            return "The application is built and packaged for deployment."
        case 4:
            return "The application is deployed to the production environment."
        case 5:
            return "The live application is monitored for performance and issues."
        default:
            return ""
    }
}