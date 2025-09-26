import React from "react";
import { encode } from "qss";
import Image from "next/image";
import { Github, Link as LinkIcon, FolderGit2 } from "lucide-react"; // 1. Imported the icon

// This function can remain as is, it's well-implemented.
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
        title: "CodeArena",
        desc: "A competitive programming platform with features like real-time contests, problem-solving, and user rankings, built with the MERN stack.",
        github: "https://github.com/Prathmesh-rajurkar/CodeArena",
        link: "https://codearena-three.vercel.app",
    },
    {
        title: "CogniCloud",
        desc: "CogniCloud offers a unified and secure space for all your files. Sync documents and photos across devices, and instantly share them with anyone using a secure link.",
        github: "https://github.com/Prathmesh-rajurkar/CogniCloud",
        link: "https://cognicloud.vercel.app/",
    },
    {
        title: "Portfolio Website",
        desc: "My personal portfolio to showcase my skills and projects, designed with Next.js and Tailwind CSS for a sleek and responsive experience.",
        github: "https://github.com/Prathmesh-rajurkar/Opinia",
        link: "https://prathmeshrajurkar.tech",
    },
];

const ProjectSection = () => {
    return (
        <section id="projects" className="pt-10 px-4 sm:px-6 lg:px-12">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
                <div className="relative">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white text-black">
                        Projects
                    </h1>
                    {/* 2. Added the decorative icon here */}
                    <div className="absolute -top-2 -right-12 sm:-right-16 text-orange-500 dark:text-purple-500">
                        <FolderGit2 size={40} strokeWidth={1.5} />
                    </div>
                </div>
                <p className="dark:text-neutral-400 text-neutral-600 mt-4 text-sm sm:text-base max-w-lg">
                    Here are some of the notable projects I have worked on,
                    showcasing my skills in web development.
                </p>
                <div className="w-32 h-px bg-orange-600 dark:bg-purple-600 mt-6"></div>
            </div>

            {/* Projects Grid */}
            <div className="flex flex-col gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-zinc-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300"
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block overflow-hidden"
                        >
                            <Image
                                src={previewLink(project.link)}
                                alt={`${project.title} screenshot`}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-300"
                            />
                        </a>

                        {/* Card Content */}
                        <div className="p-5 flex flex-col flex-grow">
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold dark:text-white text-black">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-neutral-700 dark:text-neutral-400 mt-2">
                                    {project.desc}
                                </p>
                            </div>

                            {/* Card Buttons */}
                            <div className="flex gap-3 mt-6">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-orange-600 dark:bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 dark:hover:bg-purple-700 transition-colors"
                                >
                                    <LinkIcon size={16} /> Live Preview
                                </a>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-orange-600 dark:border-purple-600 text-orange-600 dark:text-purple-500 text-sm font-medium rounded-lg hover:bg-orange-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-colors"
                                    >
                                        <Github size={16} /> GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                <a href="https://github.com/Prathmesh-rajurkar" className="text-center mt-8 py-2 px-4 rounded text-white dark:text-black bg-orange-600 dark:bg-purple-600 hover:bg-orange-700 dark:hover:bg-purple-700 transition-colors">
                    See More Projects <span className="move-arrow">→</span>
                </a>
            </div>
        </section>
    );
};

export default ProjectSection;
