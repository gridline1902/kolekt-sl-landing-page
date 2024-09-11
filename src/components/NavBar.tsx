"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { GiHeadphones } from "react-icons/gi";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="z-20 top-0 start-0 w-full h-20 bg-white flex items-center justify-center lg:sticky lg:h-16">
            {/* Desktop View */}
            <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-full lg:max-w-6xl lg:px-4">
                <Image
                    src={'/Kolekt-v3.0.png'}
                    alt="kolekt-logo"
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                />
                <div className="flex items-center gap-x-6">
                    <Link href={'/'}>
                        <span className="flex items-center gap-1">
                            <GiHeadphones className="text-base text-gray-400" />
                            <h6 className="text-sm">Contact</h6>
                        </span>
                    </Link>
                    <Button className="h-8 px-4">Create a free account</Button>
                </div>
            </div>

            {/* Mobile View */}
            <div className="flex items-center justify-between w-full px-10 lg:hidden ">
                <Image
                    src={'/Kolekt-v3.0.png'}
                    alt="kolekt-logo"
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                />

                {/* <div className="ml-4">
                    <button onClick={handleMenuToggle} className="focus:outline-none text-blue-600">
                        {isMenuOpen ? (
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        ) : (
                            <svg
                                className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div> */}
            </div>

            

            {/* Mobile Menu */}
            {/* {isMenuOpen && (
                <div className="absolute right-24 text-red-600">
                    dssdds
                </div>
            )} */}
        </nav>
    );
}

export default NavBar;
