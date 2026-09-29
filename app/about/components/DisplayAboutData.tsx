import { Building, Lightbulb, LocateFixed } from "lucide-react";
import { mission, vission } from "@/company_data/about/vissionAndMission";
import { whoWeAre } from "@/company_data/about/whoWeAre";
import type { AboutData } from "@/app/types/about/AboutData";
import DisplayData from "./DisplayData";
function DisplayAboutData() {
  const aboutData: AboutData[] = [
    { title: "Who We Are", content: whoWeAre, icon: Building },
    { title: "Vission", content: vission, icon: Lightbulb },
    { title: "Mission", content: mission, icon: LocateFixed },
  ];
  return (
    <div className="w-full grid  grid-cols-1 lg:grid-cols-3 gap-4 ">
      {aboutData.map(({ title, content, icon }, index) => (
        <DisplayData
          key={index + 1}
          title={title}
          icon={icon}
          content={content}
        />
      ))}
    </div>
  );
}

export default DisplayAboutData;
