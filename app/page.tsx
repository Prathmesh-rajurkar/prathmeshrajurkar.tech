import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";

export default function Home() {
    return (
        <div className="bg-white dark:bg-black">
            <Navbar />

            <div className="mx-auto max-w-[950px]">
                <section className="h-[calc(100vh-300px)] flex items-center justify-center">
                    <HeroSection />
                </section>

                <section id="projects" className="py-20">
                    <ProjectSection />
                </section>

                <section id="skills">
                    <SkillSection/>
                </section>
            </div>
        </div>
    );
}
