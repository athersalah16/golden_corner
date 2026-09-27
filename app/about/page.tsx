"use client";
import { Building, Lightbulb, LocateFixed } from "lucide-react";
import { mission, vission } from "@/app/company_data/about/vissionAndMission";
import { whoWeAre } from "@/app/company_data/about/whoWeAre";
import DisplayAboutData from "@/app/about/components/DisplayAboutData";
import type { AboutDTO } from "@/app/types/about/AboutDTO";
import { objectives } from "../company_data/WhyUS/objectives";
import ContentShowCase from "../common/ContentShowCase";
import OrginizationChart from "./components/OrginizationChart";
import BaseSection from "../common/base/BaseSection";

function page() {
  const aboutData: AboutDTO[] = [
    { title: "Who We Are", content: whoWeAre, icon: Building },
    { title: "Vission", content: vission, icon: Lightbulb },
    { title: "Mission", content: mission, icon: LocateFixed },
  ];
  return (
    <div className="bg-white w-full min-h-screen py-5 px-4">
      <BaseSection title="About US">

        <div className="w-full grid  grid-cols-1 lg:grid-cols-3 gap-4 ">
          {aboutData.map(({ title, content, icon }, index) => (
            <DisplayAboutData
              key={index + 1}
              title={title}
              icon={icon}
              content={content}
            />
          ))}
        </div>
      </BaseSection>

      <ContentShowCase
        title=" Our Objectives"
        description="   At Golden Corner, our objectives guide our strategy and daily
          operations, ensuring we deliver value to our clients, partners, and
          communities."
        items={objectives}
      />
      <BaseSection title="Company Organization">
        <OrginizationChart />
      </BaseSection>
    </div>
  );
}

export default page;
