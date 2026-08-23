import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Interests } from "@/components/Interests";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

import { SectionControls } from "@/components/ui/SectionControls";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionControls />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
