import React from "react";
import HeroSection from "@/component/homepage/HeroSection";
import FeatureSection from "@/component/homepage/FeatureComponent";
import ServiceComponent from "@/component/homepage/ServiceComponent";
import FrameWorkSection from "@/component/homepage/FrameWorkSection";
import DevOpsFeatureSection from "@/component/homepage/FeatureServiceComponent";
import WhyUsSection from "@/component/homepage/WhyUsSection";


export default function Home() {
    return (
        <>
            <HeroSection/>
            <FeatureSection/>
            <ServiceComponent/>
            <FrameWorkSection/>
            <DevOpsFeatureSection/>
            <WhyUsSection/>
        </>
    )
}