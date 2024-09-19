"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import OrangeImg from '@/images/Orange-2.png';
import AfrimoneyImg from '@/images/Afrimoney-3.png';
import EcobankImg from '@/images/Ecobank-2.png';
import GTBankImg from '@/images/GTBank-2.png';
import QMoneyImg from '@/images/QMoney-2.png';

const imagePaths = [
    { src: OrangeImg, alt: 'Orange' },
    { src: AfrimoneyImg, alt: 'Afrimoney' },
    { src: EcobankImg, alt: 'Ecobank' },
    { src: GTBankImg, alt: 'GTBank' },
    { src: QMoneyImg, alt: 'QMoney' },
    { src: OrangeImg, alt: 'Orange' },
    { src: AfrimoneyImg, alt: 'Afrimoney' },
    { src: EcobankImg, alt: 'Ecobank' },
    { src: GTBankImg, alt: 'GTBank' },
    { src: OrangeImg, alt: 'Orange' },
    { src: QMoneyImg, alt: 'QMoney' },
];

const PartnersSection = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto flex flex-col items-center gap-8">
                <h2 className="font-bold text-center">Trusted by These Partners</h2>
                <div className="w-full max-w-5xl">
                    <Marquee gradient={false} speed={40} pauseOnHover={true} className="overflow-hidden">
                        {imagePaths.map((image, index) => (
                            <div key={index} className="flex justify-center mx-4">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={150}
                                    height={200}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
                <hr className="w-3/4" />
            </div>
        </section>
    );
}

export default PartnersSection;
