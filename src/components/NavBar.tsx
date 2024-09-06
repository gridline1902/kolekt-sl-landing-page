"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { GiHeadphones } from "react-icons/gi";

const NavBar = () => {
    return (
        <nav className="z-20 top-0 start-0 sticky w-full h-16 bg-slate-50 flex items-center justify-center"> {/* Center everything inside nav */}
            <div className="flex items-center justify-between w-full max-w-6xl px-4"> {/* Wrapper for spacing */}
                {/* Logo */}
                <Image src={'/Kolekt-v3.0.png'} alt="kolekt-logo" width={100} height={100} />

                {/* Centered items */}
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
        </nav>
    );
}

export default NavBar;
