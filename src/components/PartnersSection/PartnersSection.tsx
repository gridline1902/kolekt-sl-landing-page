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
            repeat: 60, defaults: {
                ease: "power1",
                duration: 2
            }
        })
        tl.set(rect, { drawSVG: "0 400" })
            .to(rect, { drawSVG: "400 600" })
            .to(rect, { drawSVG: "600 1000" })
            .to(rect, { drawSVG: "1000 1200" })
            .to(rect, { drawSVG: "1200 1600" })
        return tl
    }

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.add(animateRect("#rect1"))
        tl.play(4)

        gsap.set("rect", { fill: "none" })

    }, { scope: containerRef })




    return (
        <section ref={containerRef} className="bg-white">
            <div className="pt-12">
                <h6 className="text-sm text-center font-medium">Trusted by these partners:</h6>
                <div className="flex flex-wrap justify-center gap-24 p-4"> {/* Increased gap between images */}
                    {imagePaths.map((path, index) => (
                        <div key={path} className="relative w-[120px] h-[72px] p-2"> {/* Padding around image */}
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
            </div>
            <hr className="w-full" />
        </section>
    );
}

export default PartnersSection;
