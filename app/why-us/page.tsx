import { companyStrengths } from "../company_data/WhyUS/companyStrengths";
import DisplayStrengths from "./components/DisplayStrengths";

function page() {
  return (
    <div className="w-full min-h-screen bg-white">
      <section className="w-full min-h-screen py-5 ">
        <h1 className="text-yellow-500 font-bold text-4xl text-center">
          Why Golden Corner
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-3 py-5 gap-4">
          {companyStrengths.map((strength, index) => (
            <DisplayStrengths data={strength} key={index + 1} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
