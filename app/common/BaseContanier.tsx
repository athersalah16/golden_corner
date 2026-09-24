import type { ReactNode } from "react";

type Props = { children: ReactNode; maxWidth?: string };

function BaseContanier({ children, maxWidth }: Props) {
  return (
    <div
      className={`w-full flex flex-col gap-4 lg:${maxWidth} h-full border text-yellow-500 border-yellow-500 shadow-xl shadow-yellow-50 rounded-md  p-5 duration-300 transition-all hover:bg-yellow-500 hover:text-white hover:-translate-y-1.5 hover:cursor-pointer`}
    >
      {children}
    </div>
  );
}

export default BaseContanier;
