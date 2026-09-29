import { Building } from "lucide-react";
import { whoWeAre } from "@/company_data/about/whoWeAre";
import DisplayAboutData from "@/app/about/components/DisplayData";
import Image from "next/image";
import BaseSection from "../base/BaseSection";

type Props = {
  handleClick: (link: string) => void;
};

function AboutSectionInHomePage({ handleClick }: Props) {
  return (
    <BaseSection title="About US">
      <div className="flex min-h-70 flex-col items-center gap-4 lg:px-8 lg:flex-row lg:items-stretch lg:justify-center">
        <div
          onClick={() => handleClick("/about")}
          className="flex h-full w-full max-w-5xl gap-4 px-2 py-3 lg:w-1/2"
        >
          <DisplayAboutData
            title={"Who We Are"}
            icon={Building}
            content={`${whoWeAre} Our approach combines local market understanding, modern practices, and dependable supply chains to ensure timely delivery, cost efficiency, and long-term value for our clients.`}
          />
        </div>
        <div className="flex w-full h-96 lg:w-1/2">
          <Image
            width={100}
            height={200}
            alt="About Section Photo"
            src={"/background.png"}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </BaseSection>
  );
}

export default AboutSectionInHomePage;
