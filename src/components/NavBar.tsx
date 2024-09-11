"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { GiHeadphones } from "react-icons/gi";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NavBar = () => {

    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
                    <Link href="/contact">
                        <span className="flex items-center gap-1">
                            <GiHeadphones className="text-base text-gray-400" />
                            <h6 className="text-sm">Contact</h6>
                        </span>
                    </Link>
                    <Button onClick={() => router.push('https://kolekt.monime.app')} className="h-8 px-4">Create a free account</Button>
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
            </div>
            <div className="fixed bottom-6 right-6 z-50 lg:hidden">
                <Button
                    onClick={toggleMenu}
                    className="p-4 rounded-full shadow-lg"
                >
                    {isOpen ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
                </Button>
                {/* Mobile Menu Popover */}
                {isOpen && (
                    <div className="absolute bottom-full right-0 mb-6 rounded-lg">
                        <div className="flex flex-col gap-2">
                            <Link href="/contact" onClick={toggleMenu} className="absolute bg-blue-600 rounded-full right-0 bottom-14 py-2 px-4 text-white flex items-center gap-2">
                                <GiHeadphones className="text-white" />
                                <span>Contact</span>
                            </Link>
                            <Button onClick={() => {
                                router.push('https://kolekt.monime.app')
                                toggleMenu()
                            }} className="flex items-center gap-2 w-full bg-slate-900 text-white py-2 px-4 rounded-full hover:bg-muted">
                                <span className="text-nowrap">Create a free account</span>
                            </Button>
                        </div>
                    </div>
                )}

            </div>





        </nav>
    );
}

export default NavBar;
