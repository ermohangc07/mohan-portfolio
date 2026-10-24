import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import Proof from "@/components/sections/Proof";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal><Skills /></Reveal>
      <Reveal><FeaturedCourses /></Reveal>
      <Reveal><Proof /></Reveal>
      <Reveal><CTA /></Reveal>
    </>
  );
}