"use client";


import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import Image from "next/image";
import { FaGlobeAfrica, FaRocket, FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const KolektSolutionsSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power1",
                duration: 1
            }
        });
        tl.to(".photo:not(:first-child)", {
            opacity: 1,
            scale: 1,
            stagger: 1
        });
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
        <section ref={containerRef} className="min-h-screen bg-white">
            <Box className="gallery" sx={{ display: "flex" }}>
                <Box className="left" sx={{
                    width: "50%",
                    marginLeft: "auto",
                    "& .details": {
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "40vw",
                        marginLeft: "auto",
                    }
                }}>
                    <Box className="details">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2xl font-semibold"><span className="flex items-center gap-4">EXPAND YOUR BUSINESS<FaGlobeAfrica className="text-blue-600" /></span></h1>
                            <h6 className="max-w-sm text-slate-500 font-medium">Integrate once and let your customers pay you however they want.</h6>
                        </div>
                    </Box>
                    <Box className="details">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2xl font-semibold"><span className="flex items-center gap-4">Whatsapp notification<FaWhatsapp className="text-blue-600" /></span></h1>
                            <h6 className="max-w-sm text-slate-500 font-medium">Staff can quickly confirm the success of payments via WhatsApp alerts.</h6>
                        </div>
                    </Box>
                    <Box className="details">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2xl font-semibold"><span className="flex items-center gap-4">Instant Settlement <FaRocket className="text-blue-600" /></span></h1>
                            <h6 className="max-w-sm text-slate-500 font-medium">It takes seconds to settle your payments at no additional cost.</h6>
                        </div>
                    </Box>
                </Box>
                <Box className="rightblock" sx={{
                    width: "50%",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
                    <Box sx={{
                        width: "40vw",
                        height: "30vw",
                        position: "relative",
                        "& .photo": {
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            "& img": {
                                height: "100%",
                                width: "100%",
                            }
                        }
                    }}>
                        <Box className="photo">
                            <Image
                                src="/landing_board.jpg"
                                fill
                                alt="expand" />
                        </Box>
                        <Box className="photo">
                            <Image
                                src="/landing_board.jpg"
                                fill
                                alt="img-2" />
                        </Box>
                        <Box className="photo">
                            <Image
                                src="/landing_board.jpg"
                                fill
                                alt="img-2" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section >
    );
}

export default KolektSolutionsSection;
