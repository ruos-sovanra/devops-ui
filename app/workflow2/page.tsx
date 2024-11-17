// 'use client'
//
// import { useState, useEffect, useMemo } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Code2, GitBranch, TestTube, Container, Shield, Database, Cloud, Server, FileText, AlertCircle } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Badge } from '@/components/ui/badge'
//
// interface Step {
//   icon: React.ComponentType;
//   description: string;
//   hasScanReport?: boolean;
// }
//
// interface StepNodeProps {
//   step: Step;
//   index: number;
//   currentStep: number;
//   scanResults: { vulnerabilities: number; stored: boolean };
//   stepsLength: number;
// }
//
// const nodeVariants = {
//   hidden: { scale: 0, opacity: 0 },
//   visible: {
//     scale: 1,
//     opacity: 1,
//     transition: { duration: 0.5, ease: "easeOut" }
//   }
// }
//
// const StepNode: React.FC<StepNodeProps> = ({ step, index, currentStep, scanResults, stepsLength }) => {
//   const Icon = step.icon
//   const x = 50 + index * 100
//   const y = index >= 2 && index <= 5 ? 50 : 100
//
//   return (
//     <motion.g
//       key={index}
//       variants={nodeVariants}
//       initial="hidden"
//       animate={index <= currentStep ? "visible" : "hidden"}
//     >
//       <circle
//         cx={x}
//         cy={y}
//         r="20"
//         className={`${
//           index === currentStep ? 'fill-purple-600' : index < currentStep ? 'fill-purple-400' : 'fill-purple-200'
//         } transition-colors duration-300`}
//       />
//       <foreignObject x={x - 12} y={y - 12} width="24" height="24">
//         <Icon className={`w-6 h-6 ${
//           index <= currentStep ? 'text-white' : 'text-purple-400'
//         }`} />
//       </foreignObject>
//
//       {step.hasScanReport && scanResults.vulnerabilities > 0 && index <= currentStep && (
//         <foreignObject x={x - 15} y={y - 35} width="30" height="20">
//           <Badge variant="destructive" className="text-xs">
//             {scanResults.vulnerabilities}
//           </Badge>
//         </foreignObject>
//       )}
//
//       {index < stepsLength - 1 && (
//         <>
//           <circle
//             cx={x + 40}
//             cy={y}
//             r="4"
//             className={`${
//               index < currentStep ? 'fill-purple-400' : 'fill-purple-200'
//             } transition-colors duration-300`}
//           />
//           <circle
//             cx={x + 60}
//             cy={y}
//             r="4"
//             className={`${
//               index < currentStep ? 'fill-purple-400' : 'fill-purple-200'
//             } transition-colors duration-300`}
//           />
//         </>
//       )}
//     </motion.g>
//   )
// }
//
// export default function Component() {
//   const [currentStep, setCurrentStep] = useState(0)
//   const [isAutoPlay, setIsAutoPlay] = useState(false)
//   const [scanResults, setScanResults] = useState<{
//     vulnerabilities: number;
//     stored: boolean;
//   }>({ vulnerabilities: 0, stored: false })
//
//   const steps = useMemo(() => [
//     { icon: Code2, description: "Spring Boot microservice development in local environment" },
//     { icon: GitBranch, description: "Code committed to version control system" },
//     { icon: TestTube, description: "Running unit tests and integration tests" },
//     { icon: Container, description: "Building Docker container image" },
//     { icon: Shield, description: "Security scanning with Trivy", hasScanReport: true },
//     { icon: FileText, description: "Storing scan reports in secure storage" },
//     { icon: Database, description: "Pushing to container registry" },
//     { icon: Cloud, description: "Deploying to Kubernetes cluster" },
//     { icon: Server, description: "service mesh configuration and monitoring" },
//   ], [])
//
//   useEffect(() => {
//     if (currentStep === 4) {
//       setScanResults({ vulnerabilities: 3, stored: false })
//     }
//     if (currentStep === 5) {
//       setScanResults(prev => ({ ...prev, stored: true }))
//     }
//   }, [currentStep])
//
//   useEffect(() => {
//     let timer: NodeJS.Timeout
//     if (isAutoPlay) {
//       timer = setInterval(() => {
//         setCurrentStep((prev) => (prev + 1) % steps.length)
//       }, 3000)
//     }
//     return () => clearInterval(timer)
//   }, [isAutoPlay, steps.length])
//
//   const pathVariants = {
//     hidden: { pathLength: 0 },
//     visible: {
//       pathLength: 1,
//       transition: { duration: 1, ease: "easeInOut" }
//     }
//   }
//
//   const contentVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" }
//     }
//   }
//
//   return (
//     <div className="w-full max-w-4xl mx-auto p-8 relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-lg">
//       {/*<div className="absolute top-4 right-4">*/}
//       {/*  <Button className="bg-purple-600 hover:bg-purple-700 text-white">*/}
//       {/*    Promote*/}
//       {/*  </Button>*/}
//       {/*</div>*/}
//
//       <h2 className="text-2xl font-bold text-center mb-12 text-purple-800">Spring Microservices Deployment</h2>
//
//       <svg viewBox="0 0 900 200" className="w-full">
//         <motion.path
//           d="M 50,100 H 850"
//           stroke="#E9D5FF"
//           strokeWidth="2"
//           fill="none"
//         />
//
//         <motion.path
//           d="M 150,100 C 200,100 200,50 250,50 H 450 C 500,50 500,100 550,100"
//           stroke="#9333EA"
//           strokeWidth="2"
//           fill="none"
//           variants={pathVariants}
//           initial="hidden"
//           animate={currentStep >= 2 ? "visible" : "hidden"}
//         />
//
//         <motion.path
//           d="M 650,100 L 650,50"
//           stroke="#9333EA"
//           strokeWidth="2"
//           strokeDasharray="4"
//           fill="none"
//           variants={pathVariants}
//           initial="hidden"
//           animate={currentStep >= 5 ? "visible" : "hidden"}
//         />
//
//         {steps.map((step, i) => (
//           <StepNode key={i} step={step} index={i} currentStep={currentStep} scanResults={scanResults} stepsLength={steps.length} />
//         ))}
//       </svg>
//
//       <div className="mt-8">
//         <div className="flex justify-between mb-4">
//           <Button
//             className="bg-purple-600 hover:bg-purple-700 text-white"
//             onClick={() => setCurrentStep((prev) => (prev + 1) % steps.length)}
//           >
//             Next Step
//           </Button>
//           <Button
//             variant="outline"
//             className="border-purple-600 text-purple-600 hover:bg-purple-50"
//             onClick={() => setIsAutoPlay(!isAutoPlay)}
//           >
//             {isAutoPlay ? 'Pause' : 'Auto Play'}
//           </Button>
//         </div>
//
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentStep}
//             variants={contentVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             className="bg-white p-6 rounded-lg shadow-md"
//           >
//             <div className="flex items-start justify-between">
//               <div>
//                 <h3 className="text-lg font-semibold text-purple-800 mb-2">
//                   {steps[currentStep].description}
//                 </h3>
//                 {currentStep === 4 && scanResults.vulnerabilities > 0 && (
//                   <p className="text-red-600 flex items-center gap-2">
//                     <AlertCircle className="w-4 h-4" />
//                     Found {scanResults.vulnerabilities} vulnerabilities
//                   </p>
//                 )}
//                 {currentStep === 5 && scanResults.stored && (
//                   <p className="text-green-600">Scan report stored successfully</p>
//                 )}
//               </div>
//               {steps[currentStep].hasScanReport && (
//                 <Badge variant="outline" className="text-purple-600 border-purple-600">
//                   Scanning
//                 </Badge>
//               )}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }

const Page = () => {
  return (
    <div>
      <h1>Workflow Page</h1>
    </div>
  )
}

export default Page