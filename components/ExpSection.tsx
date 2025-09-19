import React from "react";
import { Briefcase } from "lucide-react";
import Image from "next/image";

const ExpSection = () => {
    const experienceData = [
        {
            date: "July 2025 - now",
            title: "Full Stack Developer Intern",
            company: "SenseLive",
            logo: "/senselive_logo.png",
        },
        {
            date: "November 2022 - July 2026",
            title: "BTech in Computer Science and Engineering",
            company: "GH Raisoni College of Engineering and Management",
            logo: "/college_logo.png",
        },
    ];
    return (
        <section id="experience" className="pt-20 px-4 sm:px-6 lg:px-12">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
                <div className="relative">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white text-black">
                        Experience & Education
                    </h1>
                    <div className="absolute -top-2 -right-12 sm:-right-16 text-orange-500 dark:text-purple-500">
                        <Briefcase size={40} strokeWidth={1.5} />
                    </div>
                </div>
                <p className="dark:text-neutral-400 text-neutral-600 mt-4 text-sm sm:text-base max-w-lg">
                    A timeline of my professional work and educational
                    background.
                </p>
                <div className="w-32 h-px bg-orange-600 dark:bg-purple-600 mt-6"></div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col sm:flex-row items-center justify-between">
                {/* Left Side: Illustration */}
                <div className="flex justify-center">
                    <div className="w-full max-w-sm">
                        {/* Placeholder SVG Illustration */}
                        <Image
                        src={'/exp_edu.svg'}
                        alt={'exp_and_edu_svg'}
                        width={400}
                        height={400}
                        />
                    </div>
                </div>

                {/* Right Side: Timeline */}
                <div className="space-y-12">
                    {experienceData.map((item, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 dark:bg-neutral-800 text-orange-600 dark:text-purple-500 font-bold text-xl flex-shrink-0">
                                <Image
                                src={item.logo}
                                alt="company_logo"
                                width={30}
                                height={30}
                                />
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                    {item.date}
                                </p>
                                <h3 className="font-semibold text-black dark:text-white mt-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                                    {item.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpSection;
