'use client'

import React from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className="bg-gradient-to-r from-orange-300 via-pink-300 to-pink-500 pb-20 mask-b-from-rose-50">
            <div className="flex justify-between items-center px-20 pt-5">
                <h1 className="font-corinthia text-4xl text-black">Prathmesh Rajurkar</h1>
                <ul className="flex list-none gap-7 text-xl dark:text-black text-white">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                    <li>{theme}</li>
                    <li className="cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>toggle</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
