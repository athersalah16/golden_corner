import { Building } from "lucide-react";
import { whoWeAre } from "@/app/company_data/about/whoWeAre";
import DisplayAboutData from "@/app/about/components/DisplayAboutData";
import Image from "next/image";

type Props = {
  handleClick: () => void;
};

function AboutSection({ handleClick }: Props) {
  return (
    <section className="w-full min-h-screen py-5 ">
      <h1 className="text-yellow-500 font-bold text-4xl text-center">
        About US
      </h1>
      <div className="flex min-h-70 flex-col items-center gap-4 px-8 lg:flex-row lg:items-stretch lg:justify-center">
        <div
          onClick={handleClick}
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
            src={"/about.png"}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
