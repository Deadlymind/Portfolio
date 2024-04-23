import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Cta from "@/components/Cta";

import Blog from "@/components/Blog";
import BlogCard from "@/components/BlogCard";



export default function Home() {
  return (
      <main>

        <Hero />
        <About />
        <Services />
        <Blog />
        <Work />
        <Cta />
      </main>
    );

}
