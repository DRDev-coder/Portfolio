import { AboutSection } from "@/sections/about-section";
import { HeroSection } from "@/sections/hero-section";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { GitHubSection } from "@/sections/github-section";
import { ResearchInterestsSection } from "@/sections/research-interests-section";
import { SelectedWorkSection } from "@/sections/selected-work-section";
import { SkillsSection } from "@/sections/skills-section";

export default async function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <SelectedWorkSection />
            <ExperienceSection />
            <SkillsSection />
            <GitHubSection />
            <ResearchInterestsSection />
            <ContactSection />
        </>
    );
}
