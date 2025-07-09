"use client";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChoose from "@/components/WhyChoose";
import Solution from "@/components/Solution";
import FeatureTimeline from "@/components/FeatureTimeline";
import OpenSource from "@/components/OpenSource";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <WhyChoose />
      <Solution />
      <FeatureTimeline />
      <OpenSource />
      <Footer />
    </div>
  );
}