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
        <section ref={containerRef} className="min-h-fit lg:min-h-screen bg-white">
            <Box className="gallery" sx={{ display: "flex", flexDirection: { xs: 'column', lg: 'row' } }}>
                <Box className="left" sx={{
                    width: { xs: "100%", lg: "50%" },
                    marginLeft: { lg: "auto" },
                    padding: { xs: "1.5rem", lg: "0" },
                    "& .details": {
                        height: { xs: "fit-content", lg: "100vh" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: { xs: "100%", lg: "40vw" },
                        marginLeft: { lg: "auto" },
                    }
                }}>
                    <div className="py-14 sm:px-4">
                        <h1 className="text-xl font-bold lg:hidden mb-8">
                            What you can do with Kolekt
                        </h1>
                        <Box className="details">
                            <div className="flex flex-col gap-6">
                                <FaGlobeAfrica className="text-blue-600 text-3xl sm:text-4xl" />
                                <div>
                                    <h1 className="text-xl sm:text-2xl font-semibold">
                                        EXPAND YOUR BUSINESS
                                    </h1>
                                    <h6 className="max-w-sm text-slate-500 font-medium">
                                        Integrate once and let your customers pay you however they want.
                                    </h6>
                                </div>
                            </div>
                        </Box>
                        <Box className="details mt-8">
                            <div className="flex flex-col gap-6">
                                <FaWhatsapp className="text-blue-600 text-3xl sm:text-4xl" />
                                <div>
                                    <h1 className="text-xl sm:text-2xl font-semibold">
                                        WhatsApp Notification
                                    </h1>
                                    <h6 className="max-w-sm text-slate-500 font-medium">
                                        Staff can quickly confirm the success of payments via WhatsApp alerts.
                                    </h6>
                                </div>
                            </div>
                        </Box>
                        <Box className="details mt-8">
                            <div className="flex flex-col gap-6">
                                <FaRocket className="text-blue-600 text-3xl sm:text-4xl" />
                                <div>
                                    <h1 className="text-xl sm:text-2xl font-semibold">
                                        Instant Settlement
                                    </h1>
                                    <h6 className="max-w-sm text-slate-500 font-medium">
                                        It takes seconds to settle your payments at no additional cost.
                                    </h6>
                                </div>
                            </div>
                        </Box>
                    </div>
                </Box>
                <Box className="rightblock hidden lg:flex" sx={{
                    width: { xs: "100%", lg: "50%" },
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
                                alt="expand"
                            />
                        </Box>
                        <Box className="photo">
                            <Image
                                src="/landing_board.jpg"
                                fill
                                alt="img-2"
                            />
                        </Box>
                        <Box className="photo">
                            <Image
                                src="/landing_board.jpg"
                                fill
                                alt="img-3"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    );
};

export default KolektSolutionsSection;
