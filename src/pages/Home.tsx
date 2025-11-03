import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { StarBackground } from "@/components/StarBackground.";
import { ThemeToggle } from "@/components/ThemeToggle";


export const Home = () => {
    return <div className="min-h-screen ">

        {/*Theme Toggle */}
        <ThemeToggle />

        {/*Background Effects*/}
        <StarBackground />

        {/*Nav bar*/}
        <Navbar />
        {/* Main Content*/}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </main>

        {/* Footer*/}
    </div>
};