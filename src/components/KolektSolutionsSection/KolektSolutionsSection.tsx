"use client";
import FeaturesDesktop from "./KolektSolutionsDesktop";
import { FaGlobeAfrica, FaRocket, FaWhatsapp } from "react-icons/fa";
import FeaturesMobile from "./KolektSolutionsMobile";
import BusinessWoman from "@/images/landing_board_enhanced.jpg";
import WhatsappNotifications from "@/images/whatsapp-notifications-1.png";
import AfricellLogo from "@/images/Afrimoney-3.png";



const KolektSolutionsSection = () => {
    const features = [
        {
            name: "Expand our business",
            description: "Integrate once and let your customers pay you however they want.",
            icon: FaGlobeAfrica,
            screen: BusinessWoman
        },
        {
            name: "Whatsapp notification",
            description: "Staff can quickly confirm the success of payments via WhatsApp alerts.",
            icon: FaWhatsapp,
            screen: WhatsappNotifications
        },
        {
            name: "Instant Settlement",
            description: "It takes seconds to settle your payments at no additional cost.",
            icon: FaRocket,
            screen: AfricellLogo
        },

    ]
    return (
        <section className="min-h-screen bg-white py-12">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-full">
                <h2 className="text-xl font-medium tracking-tight text-center text-black lg:text-3xl">
                    What you can do with Kolekt
                </h2>
            </div>
            <div className="mt-16 md:hidden container">
                <FeaturesMobile features={features} />
            </div>
            <div className="hidden md:block container md:mt-20">
                <FeaturesDesktop features={features} />
            </div>
        </section>
    );
};

export default KolektSolutionsSection;
