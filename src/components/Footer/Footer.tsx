import Image from "next/image";
import Button from "../Button";


const Footer = () => {
    return (
        <section className="min-h-screen bg-[#0181ff] flex flex-col">
            <div className="flex flex-col gap-4 py-24 lg: items-center">
                <h1 className="text-4xl text-white font-semibold">Begin Kolekt Tidae</h1>
                <h6 className="text-md text-white font-medium">Keep customers coming back with magical in-person payment experiences</h6>
                <Button className="bg-white">ddd</Button>
            </div>
            <div className="flex-grow bg-[#072048]">
                <hr className="w-8/12" />
                <Image src={'/Kolekt-v3.0.png'} alt="kolekt-logo" width={100} height={100} />
            </div>
        </section>
    )
}

export default Footer;