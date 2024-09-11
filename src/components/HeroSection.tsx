"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
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
                })
        }

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="h-auto bg-[#072048] overflow-hidden relative">
            <div className="flex flex-col pt-12 lg:grid lg:grid-cols-2 relative z-10 min-h-screen lg:items-center lg:justify-center">
                <div className="flex flex-col gap-10 items-center justify-center lg:items-end lg:justify-center text-center lg:text-left">
                    <div className="flex flex-col gap-8">
                        <h1 ref={h1Ref} className="text-slate-50 text-[3.3rem] leading-[1.2] tracking-wide font-extrabold max-w-sm overflow-hidden lg:text-6xl">
                            <div>
                                <div>Get paid,</div>
                            </div>
                            <div>
                                <div>quickly</div>
                            </div>
                        </h1>
                        <h6 ref={h6Ref} className="text-slate-50 max-w-lg overflow-hidden text-wrap lg:text-2xl">
                            <div className="px-2"> 
                                <div>Receive, confirm, and instantly settle payments directly to your mobile wallet -</div>
                            </div>
                            <div>
                                <div><span className="font-bold">completely free of charge.</span></div>
                            </div>
                        </h6>
                        <div>
                            <Button className="h-auto w-auto py-3 px-3">Create a free account</Button>
                        </div>
                    </div>
                </div>
                <div ref={imageRef} className="relative scale-75 lg:absolute lg:right-40 lg:scale-75 lg:h-full">
                    <Image
                        src="/Kolekt-Home-v2-2.png"
                        alt="kolekt-payments"
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
