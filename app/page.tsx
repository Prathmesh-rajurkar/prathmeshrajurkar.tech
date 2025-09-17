"use client";

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="bg-white dark:bg-black h-screen">
            <div>
                <Navbar />
            </div>
            <div className="mx-auto max-w-[950px]">
                <HeroSection />
            </div>
        </div>
    );
}
