import About from "@/components/About";
import Why_uboost from "@/components/Why uboost";
import ScrollUp from "@/components/_Common/ScrollUp";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Campaigns from "@/components/Campaigns";
import Testimonials from "@/components/Testimonials";
import TheNextGeneration from "@/components/The next generation";
import HowItWorks from "@/components/How It Works";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";


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
      <Why_uboost />
      <TheNextGeneration />
      <HowItWorks />
      <Testimonials />
      <Faq />
    </main>
  );
}
