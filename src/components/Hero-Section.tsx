"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {

    const containerRef = useRef(null);
    const h1Ref = useRef(null);
    const h6Ref = useRef(null);
    const barRef = useRef(null);


    useGSAP(() => {
        const timeLine = gsap.timeline({ repeat: 100, repeatDelay: 1 });
    
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
                // onComplete: () => {
                //     timeLine.pause(); // Optionally pause the timeline after this step
                // }
            })
            .to([h1Ref.current.children, h6Ref.current.children], {
                opacity: 0,
                yPercent: gsap.utils.wrap([-100, 100]),
                duration: 1,
                ease: "none",
            }, ">1.5");
    
    }, { scope: containerRef });


    return (
        <section ref={containerRef} className="min-h-screen bg-[#072048] pt-24 overflow-hidden relative">
            <div className="flex flex-col lg:grid grid-cols-2 relative z-10">
                <div className="flex flex-col gap-10 lg:absolute left-52 top-[10rem]">
                    <div className="flex flex-col gap-8">
                        <h1 ref={h1Ref} className="text-slate-50 text-5xl tracking-wide font-extrabold max-w-sm text-left overflow-hidden">
                            <div className="mask">
                                <div>Get paid,</div>
                            </div>
                            <div className="mask">
                                <div>quickly</div>
                            </div>
                        </h1>
                        <h6 ref={h6Ref} className="text-slate-50 text-2xl text-left max-w-lg overflow-hidden">
                            <div className="mask">
                                <div>Receive, confirm, and instantly settle payments directly to your mobile wallet -</div>
                            </div>
                            <div className="mask">
                                <div><span className="font-bold">completely free of charge.</span></div>
                            </div>
                        </h6>
                    </div>
                    <div className="w-full flex">
                        <Button className="w-1/2 h-12">Create a free account</Button>
                    </div>
                </div>
                <Image
                    src="/Kolekt-Home-v2-2.png"
                    className="lg:absolute top-[2rem] right-40 scale-75"
                    alt="kolekt-payments"
                    width={500}
                    height={400}
                />
            </div>
        </section>
    );
}

export default HeroSection;
