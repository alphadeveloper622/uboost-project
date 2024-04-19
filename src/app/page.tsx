import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Campaigns from "@/components/Campaigns";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata: Metadata = {
  title: "üboost",
  description: "üboost will bring hope and love to everyone.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Campaigns />
      <About />
      <Features />
      <CallToAction />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <div className="pt-20"/>
      <SectionTitle
          subtitle=""
          title="Contact Us"
          paragraph=""
          center
        />
      <Contact />
    </main>
  );
}
