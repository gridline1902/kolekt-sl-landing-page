"use client";


import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";

gsap.registerPlugin(ScrollTrigger);

const KolektSolutionsSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Define the timeline and animations
        const tl = gsap.timeline({
            defaults: {
                ease: "power1",
                duration: 1
            }
        });

        // Set initial state for the photos
        gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

        // Create animations for the photos
        tl.to(".photo:not(:first-child)", {
            opacity: 1,
            scale: 1,
            stagger: 1
        });

        // Set up ScrollTrigger
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
                        color: "#000",
                        fontSize: "3rem",
                        fontWeight: 900,
                    }
                }}>
                    <Box className="details">
                        BRAND PRODUCT
                    </Box>
                    <Box className="details">
                        PRODUCT DETAILS
                    </Box>
                    <Box className="details">
                        DESIGN AGENCY
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
                        height: "40vw",
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
                            <img
                                src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
                                alt="img-1" />
                        </Box>
                        <Box className="photo">
                            <img
                                src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
                                alt="img-2" />
                        </Box>
                        <Box className="photo">
                            <img
                                src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
                                alt="img-3" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    );
}

export default KolektSolutionsSection;
