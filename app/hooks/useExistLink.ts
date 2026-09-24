"use client";
import { usePathname } from "next/navigation";
function useExistLink() {
  const selectedLink = usePathname();
  return { selectedLink };
}

export default useExistLink;
