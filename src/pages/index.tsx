import { Inter } from "@next/font/google";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Schedule from "../components/Schedule/schedule";
import ThemesSection from "../components/Themes/ThemesSection";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ThemesSection />
      <Schedule />
      <Contact />
      <Footer />
    </>
  );
}
