
"use client";

import Image from "next/image";
import Link from "next/link";
import { BiHeadphone } from "react-icons/bi";
import Button from "./Button";

const NavBar = () => {
    return (
        <nav className="z-20 top-0 start-0 sticky w-full h-16 bg-slate-50">
            <div className="flex items-center justify-between h-full px-4">
                <Image src={'/Kolekt-v3.0.png'} alt="kolekt-logo" width={100} height={100} />
                <div className="flex items-center gap-4">
                    <Link href={'/'}><span className="flex items-center"><BiHeadphone className="text-base" /><h6 className="text-sm">Contact</h6></span></Link>
                    <Button className="h-8 px-2">Create a free account</Button>
                </div>
            </div>

        </nav>
    );
}

export default NavBar;