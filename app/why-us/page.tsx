'use client'
import { companyStrengths } from "@/company_data/WhyUS/companyStrengths";
import ContentShowCase from "../common/common_components/ContentShowCase";

function page() {
  return (
    <div className="w-full min-h-screen bg-white pt-20">
       <ContentShowCase
        title="Why Golden Corner"
        items={companyStrengths}
      />
    </div>
  );
}

export default page;
