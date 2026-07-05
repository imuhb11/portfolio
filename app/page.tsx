import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Internship } from '@/components/sections/Internship';
import { Projects } from '@/components/sections/Projects';
import { GitHubSection } from '@/components/sections/GitHubSection';
import { Achievements } from '@/components/sections/Achievements';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Internship />
      <Projects />
      <GitHubSection />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
