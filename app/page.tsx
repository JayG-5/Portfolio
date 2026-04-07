import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import KmongReviews from "@/components/kmong-reviews";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <KmongReviews />
      <Footer />
    </main>
  );
}
