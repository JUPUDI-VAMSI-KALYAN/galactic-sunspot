import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Introducing } from "@/components/sections/Introducing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Comparison } from "@/components/sections/Comparison";
import { Market } from "@/components/sections/Market";
import { Security } from "@/components/sections/Security";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Introducing />
      <HowItWorks />
      <Comparison />
      <Market />
      <Security />
      <Footer />
    </main>
  );
}
