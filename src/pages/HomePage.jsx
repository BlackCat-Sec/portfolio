import { useEffect, useState } from "react";
import AboutSection from "../components/AboutSection";
import AchievementsSection from "../components/AchievementsSection";
import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";
import CyberBackground from "../components/CyberBackground";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import SocialSection from "../components/SocialSection";
import { navigation, portfolio } from "../data/portfolioData";

function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const updateActiveSection = () => {
      const currentOffset = window.scrollY + 180;
      let currentSection = sections[0]?.id ?? "home";

      sections.forEach((section) => {
        if (currentOffset >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      <CyberBackground />
      <Navbar links={navigation} activeSection={activeSection} brand={portfolio.brand} resume={portfolio.resume} />

      <main className="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 pb-6 pt-28 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <AchievementsSection />
        <SocialSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
