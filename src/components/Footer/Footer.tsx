import Image from "next/image";
import KolektWhiteLogo from "@/images/Kolekt-white-v3.0.png";


const Footer = () => {
    return (
        <section className="min-h-fit bg-[#0b1e3e] flex flex-col pb-12">
            {/* <div className="flex flex-col gap-4 py-24 px-4 lg: items-center">
                <h1 className="text-xl lg:text-4xl text-white font-semibold">Begin Kolekt Tidae</h1>
                <h6 className="text-sm text-center text-white font-medium leading-6">Keep customers coming back with magical in-person payment experiences</h6>
                <button className="bg-white leading-[2.2rem] px-4 rounded-md text-sm font-medium group flex items-center transition-all duration-300 ease-in-out">
                    <span className="flex items-center">
                        Contact Sales
                        <div className="inline-block overflow-hidden transition-all duration-300 ease-in-out max-w-0 group-hover:max-w-[1.5rem]">
                            <MdKeyboardArrowRight className="text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                        </div>
                    </span>
                </button>
            </div> */}
            <div className="flex-grow flex flex-col justify-center items-start px-4">
                <div className="w-full max-w-6xl mx-auto flex flex-col">
                    <div className="mt-10">
                        <hr className="w-full border-t border-white" />
                    </div>
                    <div className="flex justify-between items-center w-full mt-12 mb-12">
                        <Image src={KolektWhiteLogo} alt="kolekt-logo" width={150} height={150} />
                        <div className="flex flex-col">
                            <a href="tel:+23278102030" className="flex gap-1 text-white text-xs lg:text-sm">
                                Call: <h6 className="font-semibold">078102030</h6>
                            </a>
                            <a href="mailto:info@monime.io" className="flex gap-1 text-white text-xs lg:text-sm">
                                Email: <h6 className="font-semibold">info@monime.io</h6>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-white text-xs font-medium py-4">© 2024 Monime Limited. All Rights Reserved.</h6>
                        <h6 className="text-white text-[9px] leading-4 md:text-xs">
                            Kolekt is powered by Monime Limited, a company registered in Sierra Leone with registered company number SL140722MONIM14909 and its registered office at 5 Hillside Bypass Road, Freetown, Sierra Leone.
                            Monime Limited is authorised by the Bank of Sierra Leone under the Sandbox program for the provision of payment services.
                            All trademarks and brand names belong to their respective owners.
                            Use of these trademarks and brand names do not represent endorsement by or association with our payment services.
                        </h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;