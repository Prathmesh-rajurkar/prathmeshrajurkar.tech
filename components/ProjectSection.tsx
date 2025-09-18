import React from "react";
import { encode } from "qss";

const ProjectSection = () => {
    const previewLink = (url: string) => {
        const params = encode({
            url,
            screenshot: true,
            meta: false,
            embed: "screenshot.url",
            colorScheme: "dark",
            "viewport.isMobile": true,
            "viewport.deviceScaleFactor": 1,
        });

        return `https://api.microlink.io/?${params}`;
    };

    const projects = [
        {
            title: "InstaClone",
            desc: "A social media app with real-time posts and interactions.",
            github:"",
            link: "https://instaclone-demo.vercel.app",
        },
        {
            title: "Portfolio Website",
            desc: "My personal portfolio built with Next.js & Tailwind.",
            github:"",
            link: "https://prathmeshrajurkar.tech",
        },
        {
            title: "CodeArena",
            desc: "A LeetCode-like platform for coding practice & contests.",
            github:"",
            link: "https://codearena-demo.vercel.app",
        },
    ];

    return (
        <div className="mt-16">
            <div className="flex flex-col">
                <h1 className="text-7xl font-bold dark:text-white text-black text-center">
                    Projects
                </h1>
                <p className="dark:text-neutral-300 text-neutral-900 text-center mt-3">
                    some of my notable projects I worked on
                </p>
                <div className="border-b-2 border-black dark:border-white w-[200px] mt-6 mx-auto"></div>
            </div>
            <div></div>
        </div>
    );
};

export default ProjectSection;
