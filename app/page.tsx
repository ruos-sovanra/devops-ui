import HeroSection from "@/component/HeroSection";
import FeatureSection from "@/component/FeatureComponent";
import ServiceComponent from "@/component/ServiceComponent";
import FrameWorkSection from "@/component/FrameWorkSection";
import DevOpsFeatureSection from "@/component/FeatureServiceComponent";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <FeatureSection/>
            <ServiceComponent/>
            <FrameWorkSection/>
            <DevOpsFeatureSection/>
        </>
    )
}