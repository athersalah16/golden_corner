"use client";

import { Building, Lightbulb, LocateFixed } from "lucide-react";
import { mission, vission } from "@/app/company_data/about/vissionAndMission";
import { whoWeAre } from "@/app/company_data/about/whoWeAre";
import DisplayAboutData from "@/app/about/components/DisplayAboutData";
import type { AboutDTO } from "@/app/types/about/AboutDTO";

function page() {
  const aboutData: AboutDTO[] = [
    { title: "Who We Are", content: whoWeAre, icon: Building },
    { title: "Vission", content: vission, icon: Lightbulb },
    { title: "Who We Are", content: mission, icon: LocateFixed },
  ];
  return (
    <div className="bg-white w-full min-h-screen py-5 px-4">
      <div className="w-full grid  grid-cols-1 lg:grid-cols-3 gap-4 ">
        {aboutData.map(({title,content,icon}, index) => (
          <DisplayAboutData key={index + 1} title={title} icon={icon} content={content} />
        ))}
      </div>
    </div>
  );
}

export default page;
