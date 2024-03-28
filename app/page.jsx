import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Blog from "@/components/Blog";
import Cta from "@/components/Cta";



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
