import BaseContanier from "@/app/common/BaseContanier";
import { CompanyStrength } from "@/app/types/WhyUs/CompanyStrengths";


function DisplayStrengths({ data }: { data: CompanyStrength }) {
  const { title, description, id, icon: Icon, details } = data;
  return (
    <BaseContanier>
      <div className="min-h-80 relative w-full flex flex-col py-8 text-center px-3">
        <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex justify-center items-center absolute top-0 left-0 right-0">
          {id}
        </div>
        <div className="flex flex-col justify-center  items-center gap-5">

          <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex justify-center items-center ">
            <Icon size={20} />
          </div>
          <div>
            <h1 className="font-bold  text-blue-900 hover:cursor-text text-2xl">
              {title}
            </h1>
          </div>
          <div>
            <h2 className="font-medium text-blue-900 hover:cursor-text text-md">
              {description}
            </h2>
          </div>
          <div>
            <p className=" text-sm text-blue-900 hover:cursor-text ">
              {details}
            </p>
          </div>
        </div>
      </div>
    </BaseContanier>
  );
}

export default DisplayStrengths;
