import { Inter } from "@next/font/google";
import Head from "next/head";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Pool from "../components/Pool/Pool";
import Schedule from "../components/Schedule/schedule";
import Sponse from "../components/Sponser/Sponse";
import ThemesSection from "../components/Themes/ThemesSection";
import Speakers from "../components/Speakers/Speakers";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hack-a-preneur&apos;23</title>
      </Head>
      <Hero />
      <About />
      <ThemesSection />
      <Schedule />
      <Pool />
      <Speakers />
      <Sponse />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
