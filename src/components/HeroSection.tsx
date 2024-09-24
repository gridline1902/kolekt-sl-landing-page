"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import KolektAppScreen from "@/images/Kolekt-Home-v2-2.png";
import { PhoneFrame } from "./PhoneFrame";
import { useRouter } from "next/navigation";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const router = useRouter();
    const containerRef = useRef(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const h6Ref = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const timeLine = gsap.timeline();
        if (h1Ref.current && h6Ref.current && imageRef.current) {
            timeLine
                .from([h1Ref.current.children, h6Ref.current.children], {
                    xPercent: gsap.utils.wrap([100, -100]),
                    stagger: 0.4,
                    opacity: 0,
                    ease: "circ.inOut",
                    duration: 1,
                })
                .from([imageRef.current], {
                    yPercent: gsap.utils.wrap([100, -100]),
                    stagger: 0.4,
                    opacity: 0,
                    ease: "circ.inOut",
                    duration: 1,
                })
                .to([h1Ref.current.children, h6Ref.current.children, imageRef.current.children], {
                    opacity: 1,
                    duration: 2,
                    onComplete: () => {
                        timeLine.kill();
                    }
                });
        }
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="min-h-screen bg-[#072048] overflow-hidden relative md:min-h-screen">
            <div className="flex flex-col pt-12 lg:grid lg:grid-cols-2 relative z-10 min-h-screen lg:items-center lg:justify-center">
                <div className="flex flex-col gap-10 items-center justify-center lg:items-end lg:justify-center text-center lg:text-left">
                    <div className="flex flex-col gap-8">
                        <h1 ref={h1Ref} className="text-slate-50 text-[3.3rem] leading-[1.2] tracking-wide font-extrabold max-w-sm overflow-hidden lg:text-6xl text-center lg:text-left md:text-right">
                            <div>
                                <div>{`Get paid, \n quickly`}</div>
                            </div>
                        </h1>
                        <h6 ref={h6Ref} className="text-slate-50 max-w-lg overflow-hidden text-wrap lg:text-2xl">
                            <div>
                                <div>Receive, confirm, and instantly settle payments directly to your mobile wallet -</div>
                            </div>
                            <div>
                                <div><span className="font-bold">completely free of charge.</span></div>
                            </div>
                        </h6>
                        <div>
                            <Button
                                onClick={() => {
                                    router.push("https://kolekt.monime.app");
                                }}
                                className="h-auto w-auto py-3 px-3"
                            >
                                Create a free account
                            </Button>
                        </div>
                    </div>
                </div>
                <div ref={imageRef} className="relative h-[80vh] lg:h-full lg:absolute lg:right-40 md:items-center flex justify-center lg:justify-end lg:items-start lg:mt-60 sm: mt-12 sm: mb-4">
                    <PhoneFrame className="h-full">
                        <Image
                            className="photo-screen object-cover scale-100"
                            src={KolektAppScreen}
                            alt="kolekt-payments"
                            fill
                        />
                    </PhoneFrame>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
