"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function NotFound() {
  const router = useRouter();
  useEffect(() => {
    const routerId = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => clearTimeout(routerId);
  }, []);
  return (
    <div className=" w-full h-screen gap-4 bg-white flex justify-center items-center flex-col">
      <h1 className="text-yellow-500 text-5xl font-bold ">404 </h1>
      <p className="text-blue-800 text-4xl ">The Page Not Found </p>

      <p className="text-gray-400">Reditct you to Home...</p>
    </div>
  );
}

export default NotFound;
