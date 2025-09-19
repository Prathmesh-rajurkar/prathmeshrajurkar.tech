import React from "react";
import { SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";

const Footer = () => {
    const social_apps = [
        { id: "X", logo: <SiX />, link: "https://x.com/prathmsh1909" },
        { id: "linkedIn", logo: <SiLinkedin />, link: "https://www.linkedin.com/in/prathmesh-rajurkar-3493b91aa/" },
        { id: "gmail", logo: <SiGmail />, link: "mailto:prathmeshrajurkar199@gmail.com" },
        { id: "github", logo: <SiGithub />, link: "https://github.com/Prathmesh-rajurkar" },
    ];
    return (
        <section>
            <div className="bg-gradient-to-r from-orange-100 via-pink-200 to-fuchsia-300 dark:bg-gradient-to-r dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 pt-40 mask-t-from-20% mask-t-to-80%">
                <div className="flex justify-between items-center max-w-5xl mx-auto pb-2 px-4">
                    <div className="text-black text-sm dark:text-white">
                        made with ❤️ by Prathmesh😎
                    </div>
                    <div className="flex gap-4 justify-between items-center text-black dark:text-white">
                        {social_apps.map((app) => (
                            <div key={app.id}><a href={app.link}>{app.logo}</a></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
