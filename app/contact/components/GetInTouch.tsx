import { ContactInfoType } from "@/app/types/contact/ContactInfoType";

type Props = { data: ContactInfoType };

function GetInTouch({ data }: Props) {
  const { key, value, icon: Icon, link } = data;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreffer"
      className="flex flex-row text-gray-400 hover:text-yellow-500 transition-colors duration-300 gap-4 hover:cursor-pointer"
    >
      <Icon /> {value}
    </a>
  );
}

export default GetInTouch;
