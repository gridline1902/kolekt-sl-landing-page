"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { GiHeadphones } from "react-icons/gi";

const NavBar = () => {
    return (
        <nav className="z-20 top-0 start-0 sticky w-full h-24 bg-slate-50 flex items-center justify-center">
            <div className="sm: hidden lg:flex lg:items-center lg:justify-between lg:w-full lg:max-w-6xl lg:px-4"> 
                <Image src={'/Kolekt-v3.0.png'} alt="kolekt-logo" width={100} height={100} className="w-auto h-auto" />
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
