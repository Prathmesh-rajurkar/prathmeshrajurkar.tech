"use client";

import React, { useState, useEffect, RefObject } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
    heroRef: RefObject<HTMLElement | null>;
    projectsRef: RefObject<HTMLElement | null>;
    skillsRef: RefObject<HTMLElement | null>;
    experienceRef: RefObject<HTMLElement | null>;
    contactRef: RefObject<HTMLElement | null>;
}

const Navbar = ({
    heroRef,
    projectsRef,
    skillsRef,
    experienceRef,
    contactRef,
}: NavbarProps) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // scroll handler
    const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const navLinks = [
        { name: "Home", ref: heroRef },
        { name: "Projects", ref: projectsRef },
        { name: "Skills", ref: skillsRef },
        { name: "Experience", ref: experienceRef },
        { name: "Contact", ref: contactRef },
    ];

    return (
        <div className="bg-gradient-to-r from-orange-100 via-pink-200 to-fuchsia-300 dark:bg-gradient-to-r dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 pb-40 mask-b-from-20% mask-b-to-80%">
            <nav className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-12 ">
                <div className="mx-auto max-w-5xl flex justify-between items-center">
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="font-bold text-xl h-10 w-10 bg-slate-800 dark:bg-white text-white dark:text-slate-800 flex items-center justify-center rounded-full"
                    >
                        P
                    </a>

                    {/* Links */}
                    <div className="hidden sm:flex items-center gap-8 font-semibold text-slate-800 dark:text-slate-200">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.ref)}
                                className="hover:text-orange-600 dark:hover:text-purple-500 transition-colors duration-300"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300"
                        aria-label="Toggle theme"
                    >
                        {mounted &&
                            (theme === "dark" ? (
                                <Sun size={20} />
                            ) : (
                                <Moon size={20} />
                            ))}
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
