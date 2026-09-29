"use client";

import { useRouter } from "next/navigation";

import HeroSection from "@/app/common/components/HeroSection";
import AboutSectionInHomePage from "./common/components/AboutSectionInHomePage";
import ContentShowCase from "./common/common_components/ContentShowCase";
import { objectives } from "@/company_data/WhyUS/objectives";
import { companyStrengths } from "@/company_data/WhyUS/companyStrengths";

export default function Home() {
  const router = useRouter();

  const ourSolutions: string[] = [
    "Electrical & Instrumentation",
    "Mechanical",
    "Safety Equipment",
    "Building Materials",
    "Contracting Works",
  ];

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSection />
      <AboutSectionInHomePage handleClick={handleClick} />

      <ContentShowCase
        title=" Our Objectives"
        description="   At Golden Corner, our objectives guide our strategy and daily
          operations, ensuring we deliver value to our clients, partners, and
          communities."
        items={objectives.slice(0, 4)}
        navigateTo="about"
        onClick={handleClick}
      />
      <ContentShowCase
        title="Brands We Trust"
        items={[]}
        navigateTo="why-us"
        onClick={handleClick}
      />
      <ContentShowCase
        title="Why Golden Corner"
        items={companyStrengths.slice(0, 4)}
        navigateTo="why-us"
        onClick={handleClick}
      />
    </div>
  );
}
