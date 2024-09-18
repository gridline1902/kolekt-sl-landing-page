import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { PhoneFrame } from "../PhoneFrame";
import { IconType } from "react-icons";
import Image, { StaticImageData } from "next/image";

type Features = {
    name: string;
    description: string;
    icon: IconType;
    screen: StaticImageData;
};

function usePrevious<T>(value: T) {
    let ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

function FeaturesDesktop({ features }: Readonly<{ features: Features[] }>) {
    let [changeCount, setChangeCount] = useState(0);
    let [selectedIndex, setSelectedIndex] = useState(0);
    let prevIndex = usePrevious(selectedIndex);
    let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex;

    let onChange = useDebouncedCallback(
        (selectedIndex) => {
            setSelectedIndex(selectedIndex);
            setChangeCount((changeCount) => changeCount + 1);
        },
        100,
        { leading: true }
    );

    return (
        <TabGroup
            className="grid grid-cols-12 items-center gap-8 pe-4 lg:gap-16 xl:gap-24"
            selectedIndex={selectedIndex}
            onChange={onChange}
            vertical
        >
            <TabList className="relative z-10 order-last col-span-6 space-y-6">
                {features.map((feature, featureIndex) => (
                    <div
                        key={feature.name}
                        className={`relative rounded-2xl transition-colors ${featureIndex === selectedIndex ? "bg-[#0181ff] text-white" : "bg-gray-300 text-slate-900"
                            }`} // Conditional background and text color
                    >
                        {featureIndex === selectedIndex && <div className="absolute inset-0" />}
                        <div className="relative z-10 p-8">
                            <feature.icon className="h-8 w-8" />
                            <h3 className="mt-6 text-lg font-semibold uppercase">
                                <Tab className="text-left outline-none">
                                    <span className="absolute inset-0 rounded-2xl" />
                                    {feature.name}
                                </Tab>
                            </h3>
                            <p className="mt-2 text-sm">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </TabList>
            <div className="relative col-span-6">
               
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {/* <CircleBackground color="#13B5C8" className="animate-spin-slower" /> */}
                </div>
                <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
                    <TabPanels as={Fragment}>
                        {features.map((feature, featureIndex) =>
                            selectedIndex === featureIndex ? (
                                <TabPanel
                                    static
                                    key={feature.name + changeCount}
                                    className="col-start-1 row-start-1 flex ui-not-focus-visible:outline-none" // Removed focus outline
                                >
                                    <Image
                                        src={feature.screen}
                                        width={500}
                                        height={500}
                                        objectFit="contain"
                                        alt={feature.name}
                                    />
                                </TabPanel>
                            ) : null
                        )}
                    </TabPanels>
                </PhoneFrame>
            </div>
        </TabGroup>
    );
}

export default FeaturesDesktop;
