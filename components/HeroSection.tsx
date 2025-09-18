import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="dark:text-white text-black p-2">
                <h1 className="text-6xl font-semibold ">
                    PRATHMESH <br /> RAJURKAR.
                </h1>
                <h3 className="text-xl font-semibold mt-4">
                    Full-Stack Web Developer
                </h3>
                <p className="mt-4 text-sm font-extralight">
                    A passionate Full Stack Developer and lifelong learner who
                    enjoys building impactful applications and solving complex
                    problems. I take pride in writing clean, efficient code and
                    designing user-friendly interfaces. Always curious, I strive
                    to expand my technical knowledge and sharpen my skills to
                    create innovative solutions that make a difference.
                </p>
                <div className="flex gap-2">
                    <button className="px-3 py-1 mt-4 dark:text-black text-white rounded dark:bg-purple-600 bg-orange-600">
                        My Skills <span className="move-arrow">→</span>
                    </button>
                    <button className="px-3 py-1 mt-4 dark:text-purple-600 text-orange-600 rounded dark:bg-black border dark:border-purple-600 bg-white border-orange-600">
                        Contact Me <span className="move-arrow">→</span>
                    </button>
                </div>
            </div>
            <div className="flex-1 justify-center items-center p-6 hidden sm:flex">
                <div className="w-80 h-80 md:w-96 md:h-96 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-pink-300 to-fuchsia-400 dark:from-orange-500 dark:via-pink-500 dark:to-fuchsia-600 rounded-full blur-2xl opacity-50"></div>
                    <div className="absolute inset-0 overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-morph">
                        <Image
                            src="/profile_photo.jpg"
                            alt="Abstract Developer Illustration"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
