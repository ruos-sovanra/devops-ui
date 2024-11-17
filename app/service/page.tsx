'use client';

import IconCloudDemo from "@/component/IconCloudDemo";
import TerminalPage from "@/app/terminal/page";
import DevOpsFlow from "@/app/workflow/page";
import web from "@/public/web-server.json";
import code from "@/public/code.json";
import dynamic from "next/dynamic";
import StorageSection from "@/component/service-page/StorageSection";

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const webAnimation = {
    loop: true,
    autoplay: true,
    animationData: web,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

const codeAnimation = {
    loop: true,
    autoplay: true,
    animationData: code,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

export default function Component() {
    return (
        <div className="bg-white">
            <section className="relative overflow-hidden">
                <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative">
                    <div className="flex flex-col items-center text-center relative z-10">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block w-1/4 max-w-xs">
                            <Lottie options={webAnimation}/>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-1/4 max-w-xs">
                            <Lottie options={codeAnimation}/>
                        </div>

                        <div className="w-full max-w-4xl mx-auto">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8">
                                <span className="text-purple-400">Learn How </span>
                                <span className="text-blue-500">Cloudinator</span>
                                <br className="hidden sm:inline"/>
                                <span className="text-purple-400">Can Build Your Product </span>
                                <span className="text-blue-500">Fast</span>
                            </h1>

                            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
                                Unlock the incredible power of Cloudinator, revolutionizing product
                                development speed. Accelerate your process, embrace rapid innovation,
                                and experience a swift and efficient journey. Discover Cloudinator's
                                potential today.
                            </p>

                            <button className="bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors">
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 flex justify-center">
                    <IconCloudDemo/>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <TerminalPage/>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <DevOpsFlow/>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <StorageSection/>
                </div>
            </section>
        </div>
    )
}