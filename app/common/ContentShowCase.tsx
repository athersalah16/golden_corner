import type { CompanyStrength } from "@/app/types/WhyUs/CompanyStrengths";
import BaseSection from "./base/BaseSection";
import DisplayContent from "./DisplayContent";

type Props = {
  title: string;
  description?: string;
  items: CompanyStrength[];
  navigateTo?: string;
  onClick?: (link: string) => void;
};

function ContentShowCase({
  title,
  navigateTo,
  items,
  onClick,
  description,
}: Props) {
  const handleClick = () => {
    if (!onClick) return;
    onClick(`/${navigateTo}`);
  };

  return (
    <BaseSection title={title}>
      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-blue-900 font-semibold text-center max-w-lg">
          {description}
        </p>
        <div
          onClick={handleClick}
          className="w-full grid grid-cols-1 gap-4 px-3 py-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item, index) => (
            <DisplayContent data={item} key={`${item.title}-${index}`} />
          ))}
        </div>
      </div>
    </BaseSection>
  );
}

export default ContentShowCase;
