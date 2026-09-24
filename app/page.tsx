"use client";
import HeroSection from "@/app/common/components/HeroSection";
import { useRouter } from "next/navigation";
import AboutSection from "./common/components/AboutSection";
import { companyStrengths } from "./company_data/WhyUS/companyStrengths";
import DisplayStrengths from "./why-us/components/DisplayStrengths";

export default function Home() {
  const router = useRouter();

  const ourSolutions: string[] = [
    "Electrical & Instrumentation",
    "Mechanical",
    "Safety Equipment",
    "Building Materials",
    "Contracting Works",
  ];

  const handleClick = () => {
    router.push("/about");
  };

  return (
    <div className="w-full min-h-screen bg-white ">
      <HeroSection />
      <AboutSection handleClick={handleClick} />
      
      <section className="w-full min-h-screen py-5 ">
        <h1 className="text-yellow-500 font-bold text-4xl text-center">
          Why Golden Corner
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-3 py-5 gap-4">
          {companyStrengths.slice(0, 4).map((strength, index) => (
            <DisplayStrengths data={strength} key={index + 1} />
          ))}
        </div>
      </section>
    </div>
  );
}
