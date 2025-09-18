"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// It's a good practice to have icons as separate components or use an icon library.
// For simplicity, I'm defining them here.
const SunIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);

const MoonIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    // The following state and effect are needed to avoid hydration mismatch issues with next-themes.
    // The server doesn't know the theme, but the client does. This ensures we only render
    // the theme-specific UI on the client after it has mounted.
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        // The outer div handles the gradient and the fade-out mask effect
        <div className="bg-gradient-to-r from-orange-100 via-pink-200 to-fuchsia-300 dark:bg-gradient-to-r dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 pb-40 mask-b-from-20% mask-b-to-80%">
            <nav className="flex justify-between items-center max-w-5xl mx-auto pt-5 px-4">
                {/* Logo */}
                <div className="font-bold text-xl h-10 w-10 bg-slate-800 dark:bg-white text-white dark:text-slate-800 flex items-center justify-center rounded-full">
                    P
                </div>

                {/* Navigation Links */}
                <ul className="hidden sm:flex justify-center items-center gap-8 list-none text-slate-800 dark:text-slate-200 font-semibold">
                    <li>
                        <a
                            href="#home"
                            className="hover:text-black dark:hover:text-white transition-colors duration-300"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="hover:text-black dark:hover:text-white transition-colors duration-300"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#exp"
                            className="hover:text-black dark:hover:text-white transition-colors duration-300"
                        >
                            Experience & Education
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="hover:text-black dark:hover:text-white transition-colors duration-300"
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-black dark:hover:text-white transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full text-slate-800 dark:text-slate-200 hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300"
                    aria-label="Toggle theme"
                >
                    {mounted && (theme === "dark" ? <SunIcon /> : <MoonIcon />)}
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
