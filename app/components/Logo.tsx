import Image from "next/image";

function Logo() {
  return (
    <div className="flex flex-row gap-2 ">
      <div className="w-8 h-8">
        <Image
          src={"/logo.png"}
          alt="Company Logo"
          width={100}
          height={100}
          className="w-full h-full rounded-md"
        />
      </div>
      <h2 className="text-2xl text-yellow-500">Golden Corner</h2>
    </div>
  );
}

export default Logo;
