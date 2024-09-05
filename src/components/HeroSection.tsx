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

    useGSAP(() => {
        const timeLine = gsap.timeline();
        if (h1Ref.current && h6Ref.current) {
            timeLine
                .from([h1Ref.current.children, h6Ref.current.children], {
                    xPercent: gsap.utils.wrap([100, -100]),
                    stagger: 0.4,
                    opacity: 0,
                    ease: "circ.inOut",
                    duration: 1,
                })
                .to([h1Ref.current.children, h6Ref.current.children], {
                    opacity: 1,
                    duration: 2,
                    onComplete: () => {
                        timeLine.kill();
                    }
                })
                .to([h1Ref.current.children, h6Ref.current.children], {
                    opacity: 0,
                    yPercent: gsap.utils.wrap([-100, 100]),
                    duration: 1,
                    ease: "none",
                }, ">1.5");
        }

    }, { scope: containerRef });


    return (
        <section ref={containerRef} className="min-h-screen bg-[#072048] overflow-hidden relative">
            <div className="flex flex-col lg:grid grid-cols-2 relative z-10 min-h-screen lg:items-center lg:justify-center">
                <div className="flex flex-col gap-10 lg:items-end lg:justify-center">
                    <div className="flex flex-col gap-8">
                        <h1 ref={h1Ref} className="text-slate-50 text-6xl tracking-wide font-extrabold max-w-sm text-left overflow-hidden">
                            <div>
                                <div>Get paid,</div>
                            </div>
                            <div>
                                <div>quickly</div>
                            </div>
                        </h1>
                        <h6 ref={h6Ref} className="text-slate-50 text-2xl text-left max-w-lg overflow-hidden">
                            <div>
                                <div>Receive, confirm, and instantly settle payments directly to your mobile wallet -</div>
                            </div>
                            <div>
                                <div><span className="font-bold">completely free of charge.</span></div>
                            </div>
                        </h6>
                        <Button className="h-11 w-[40%]">Create a free account</Button>
                    </div>
                </div>
                <Image
                    src="/Kolekt-Home-v2-2.png"
                    className="lg:absolute right-40 scale-75"
                    alt="kolekt-payments"
                    width={500}
                    height={400}
                />
            </div>
        </section>
    );
}

export default HeroSection;
