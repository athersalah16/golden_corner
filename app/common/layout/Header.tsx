"use client";
import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";
import NavLinks from "@/app/common/common_components/NavLinks";
import Logo from "@/app/common/common_components/Logo";
import RequestQuoteBtn from "@/app/common/common_components/RequestQuoteBtn";
import ChatOnWhatsApp from "@/app/common/common_components/ChatOnWhatsApp";
import useExistLink from "@/app/hooks/useExistLink";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { selectedLink } = useExistLink();
  const isHomePage = selectedLink === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div
      className={`fixed z-50 flex h-20 w-full items-center ${isHomePage && !scrolled ? "bg-transparent " : " bg-blue-950"} transition-all duration-300  px-4 lg:px-8`}
    >
      <div className="hidden lg:flex justify-between items-center w-full ">
        <Logo />

        <div>
          <NavLinks linksStyle="flex flex-row gap-4" />
        </div>
        <div>
          <RequestQuoteBtn />
        </div>
      </div>

      {/* Display On Mobile  */}

      <div className="lg:hidden w-full flex justify-between items-center transition-all duration-500">
        <Logo />
        <button
          className={`${isHomePage ? "text-white" : "text-gray-400"} cursor-pointer lg:text-yellow-500 lg:hidden`}
          onClick={handlick}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {isOpen && (
          <div className="fixed inset-x-0 bottom-0 top-20 flex flex-col gap-8  bg-blue-950 px-6 py-8 lg:hidden">
            <NavLinks linksStyle="flex flex-col gap-6" />
            <div className="w-full">
              <RequestQuoteBtn />
            </div>
            <div className="w-full">
              <ChatOnWhatsApp />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
