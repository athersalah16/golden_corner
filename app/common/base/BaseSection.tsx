import React from "react";

type Props = { title: string; children: React.ReactNode };
function BaseSection({ children, title }: Props) {
  return (
    <section className="w-full min-h-screen py-5">
    <h1 className="text-yellow-500 font-bold text-4xl  text-center py-5">
        {title}
      </h1>
      {children}
    </section>
  );
}

export default BaseSection;
