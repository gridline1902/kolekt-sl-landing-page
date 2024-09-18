"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FeaturesDesktop from "./KolektSolutionsDesktop";
import { FaGlobeAfrica, FaMobile, FaRocket, FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


import KolektImage from "@/images/Kolekt-v3.0.png";
import AfricellLogo from "@/images/Afrimoney-3.png"
import FeaturesMobile from "./KolektSolutionsMobile";

const features = [
    {
        name: "Expand our business",
        description: "Integrate once and let your customers pay you however they want.",
        icon: FaGlobeAfrica,
        screen: KolektImage
    },
    {
        name: "Whatsapp notification",
        description: "Staff can quickly confirm the success of payments via WhatsApp alerts.",
        icon: FaWhatsapp,
        screen: AfricellLogo
    },
    {
        name: "Instant Settlement",
        description: "It takes seconds to settle your payments at no additional cost.",
        icon: FaRocket,
        screen: KolektImage
    },

]




const KolektSolutionsSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power1",
                duration: 1,
            },
        });

        // Set initial positions for images (move them outside of the container horizontally)
        gsap.set(".photo:not(:first-child)", {
            x: "100%",  // Move the images outside the right of the container
            opacity: 0, // Set opacity to 0 initially
        });

        // Animate images on scroll (slide out horizontally and reappear)
        tl.to(".photo:not(:first-child)", {
            x: "0%",   // Move them back to their original position
            opacity: 1, // Make them visible
            stagger: 1, // Stagger their animations for smooth transitions
        });

        // Create ScrollTrigger to trigger the animation on scroll
        ScrollTrigger.create({
            trigger: ".gallery",
            start: "top top",
            end: "bottom bottom",
            pin: ".rightblock",
            animation: tl,
            scrub: true,
        });
    }, { scope: containerRef });

    return (
        <section className="min-h-screen bg-white py-12">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
                <h2 className="text-3xl font-medium tracking-tight text-center text-black">
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
