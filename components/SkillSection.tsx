"use client";
import React from "react";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiAngular,
    SiPython,
    SiExpress,
    SiMongodb,
    SiPostgresql,
} from "react-icons/si";
import { Wand2 } from "lucide-react";

const skillsData = [
    { name: "HTML", icon: <SiHtml5 size={40} />, color: "#E34F26" },
    { name: "CSS", icon: <SiCss3 size={40} />, color: "#1572B6" },
    { name: "Javascript", icon: <SiJavascript size={40} />, color: "#F7DF1E" },
    { name: "Typescript", icon: <SiTypescript size={40} />, color: "#3178C6" },
    { name: "React", icon: <SiReact size={40} />, color: "#61DAFB" },
    {
        name: "Next.js",
        icon: <SiNextdotjs size={40} />,
        color: "oklch(20.5% 0 0)",
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={40} />,
        color: "#06B6D4",
    },
    { name: "Angular", icon: <SiAngular size={40} />, color: "#CB3837" },
    { name: "Python", icon: <SiPython size={40} />, color: "#16ab54" },
    { name: "Express", icon: <SiExpress size={40} />, color: "#CB3837" },
    { name: "MongoDB", icon: <SiMongodb size={40} />, color: "#007632" },
    { name: "PostgresSQL", icon: <SiPostgresql size={40} />, color: "#06B6D4" },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-12">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
                <div className="relative">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white text-black">
                        Skills
                    </h1>
                    {/* Decorative Icon */}
                    <div className="absolute -top-2 -right-12 sm:-right-16 text-orange-500 dark:text-purple-500">
                        <Wand2 size={40} strokeWidth={1.5} />
                    </div>
                </div>
                <p className="dark:text-neutral-400 text-neutral-600 mt-4 text-sm sm:text-base max-w-lg">
                    Skills I utilize to effectively complete tasks and build
                    modern web applications.
                </p>
                <div className="w-32 h-px bg-orange-600 dark:bg-purple-600 mt-6"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10">
                {skillsData.map((skill) => (
                    <div
                        key={skill.name}
                        className="group flex flex-col text-center items-center justify-center gap-2 p-4 rounded-lg transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-neutral-800"
                    >
                        <div
                            className="transition-transform duration-300 group-hover:-translate-y-2"
                            style={{ color: skill.color }}
                        >
                            {skill.icon}
                        </div>
                        <p className="font-medium text-neutral-700 dark:text-neutral-300 transition-colors duration-300">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
            {/* Special style for Next.js icon in dark mode */}
            <style jsx global>{`
                .dark .group:hover .text-black {
                    color: white !important;
                }
                .dark svg[color="#000000"] {
                    color: white;
                }
            `}</style>
        </section>
    );
};

export default SkillsSection;
