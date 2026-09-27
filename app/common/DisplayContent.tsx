import BaseContanier from "@/app/common/base/BaseContanier";
import { CompanyStrength } from "@/app/types/WhyUs/CompanyStrengths";

function DisplayContent({ data }: { data: CompanyStrength }) {
  const { title, description, id, icon: Icon, details } = data;
  return (
    <BaseContanier>
      <div className=" min-h-80 text-blue-900text-blue-900  w-full flex flex-col py-8 gap-5 px-3">
        <div className="w-1/3 flex justify-between items-center gap-3">
          <div className="w-20 h-12  bg-gray-200 group-hover:bg-yellow-500 group-hover:text-white    rounded-full flex justify-center items-center ">
            <Icon size={30} />
          </div>
          <span className="w-12 h-12 font-bold text-2xl text-yellow-500 rounded-full flex justify-center items-center ">
            {id}
          </span>
        </div>
        <div
          className="flex flex-col justify-center    gap-5"
        >
          <div>
            <h1 className="font-bold  text-blue-900 group-hover:text-white hover:cursor-text text-2xl">{title}</h1>
          </div>
          <div>
            <h2 className="font-medium text-blue-900 group-hover:text-white hover:cursor-text text-md">
              {description}
            </h2>
          </div>
          <div>
            <p className=" text-sm text-blue-900 group-hover:text-white hover:cursor-text ">{details}</p>
          </div>
        </div>
      </div>
    </BaseContanier>
  );
}

export default DisplayContent;
