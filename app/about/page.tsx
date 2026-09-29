"use client";

import { objectives } from "@/company_data/WhyUS/objectives";
import ContentShowCase from "../common/common_components/ContentShowCase";
import OrginizationChart from "./components/OrginizationChart";
import BaseSection from "../common/base/BaseSection";
import DisplayAboutData from "@/app/about/components/DisplayAboutData";

function page() {
  return (
    <div className="bg-white w-full min-h-screen pt-20 pb-5 px-4">
      <BaseSection title="About Us">
        <DisplayAboutData />
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
