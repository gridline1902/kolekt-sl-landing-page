"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";

const imagePaths = [
    '/Orange-2.png',
    '/Afrimoney-3.png',
    '/Ecobank-2.png',
    '/GTBank-2.png',
    '/QMoney-2.png'
];

const PartnersSection = () => {

    const containerRef = useRef(null);
    const svgRef = useRef<SVGSVGElement>(null);


    function animateRect(rect: gsap.TweenTarget) {
        let tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: "power1.inOut", duration: 1.5 }
        });
        tl.to(rect, { stroke: "#FF8C00" })
            .to(rect, { stroke: "#FF0000" })
            .to(rect, { stroke: "#0000FF" });

        return tl;
    }

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.add(animateRect("#rect1"));
        tl.play();

        gsap.set("rect", { fill: "none" });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="bg-white">
            <div className="flex flex-col gap-10 pt-12 sm: items-center lg:gap-12">
                <h6 className="text-sm text-center font-medium">Trusted by these partners:</h6>
                <div className="flex flex-col justify-center gap-4 lg:flex-row lg:gap-24 ">
                    {imagePaths.map((path, index) => (
                        <div key={path} className="relative w-[120px] h-[72px]"> 
                            <svg
                                ref={svgRef}
                                viewBox="0 0 120 72"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 w-full h-full"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="120"
                                    height="72"
                                    style={{
                                        fill: 'transparent',
                                        stroke: 'rgb(0, 0, 0)',
                                        strokeWidth: '2px'
                                    }}
                                    id="rect1"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center p-2"> {/* Padding inside the rectangle */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src={path}
                                        alt={`Partner ${index + 1}`}
                                        layout="fill"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <hr className="mx-auto w-3/4" />
            </div>
        </section>
    );
}

export default PartnersSection;
