import { ContactInfoType } from "@/app/types/contact/ContactInfoType";
import Link from "next/link";

type Props = { data: ContactInfoType };

function GetInTouch({ data }: Props) {
  const {  value, icon: Icon, link } = data;

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row text-gray-400 hover:text-yellow-500 transition-colors duration-300 gap-4 hover:cursor-pointer"
    >
      <Icon /> {value}
    </Link>
  );
}

export default GetInTouch;
