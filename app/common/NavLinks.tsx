"use client";

import { navLinks } from "@/app/company_data/header/navLinks";
import useExistLink from "@/app/hooks/useExistLink";
import { NavLinkType } from "@/app/types/header/NavLinkType";


type Props = { linksStyle: string };
function NavLinks({ linksStyle }: Props) {
  const { selectedLink } = useExistLink();
  console.log(selectedLink);

  return (
    <div className={`w-full  ${linksStyle}`}>
      {navLinks.map(({ link, linkName }: NavLinkType, index) => (
        <a
          href={link}
          key={index + 1}
          className={`
              hover:text-yellow-500 duration-300  hover:border-b hover:border-b-yellow-500  transition-all 
              ${selectedLink === "/" ? "text-white" : ""} 
              ${selectedLink === link ? "text-yellow-500 border-b border-b-yellow-500 " : "hover:-translate-y-1.5 text-gray-400"}
             `}
        >
          {linkName}
        </a>
      ))}
    </div>
  );
}

export default NavLinks;
