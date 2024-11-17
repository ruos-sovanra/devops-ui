'use client';

import dynamic from 'next/dynamic';
import server from '@/public/hero.json';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false }); // Dynamically import Lottie without SSR

const serverAnimation = {
    loop: true,
    autoplay: true,
    animationData: server,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

const HeroSection = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(200,210,255,0.3),transparent)]" />
            <div className="relative z-10">
                <main className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                                Say Goodbye
                                <br />
                                To <span className="text-blue-600">Manual.</span>
                            </h1>
                            <p className="mb-6 text-gray-600">
                                At Cloudinator we are on a mission to revolutionize the way you work. With Cloudinator, you can say goodbye to manual tasks.
                            </p>
                            <button className="w-full md:w-auto bg-purple-500 text-white px-6 py-3 rounded-md font-semibold">
                                Start Deploy
                            </button>
                        </div>
                        <div className="md:w-1/2 relative">
                            <Lottie options={serverAnimation} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HeroSection;
