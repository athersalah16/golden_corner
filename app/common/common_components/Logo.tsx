import Image from "next/image";

function Logo() {
  return (
    <div className="flex flex-row gap-2 items-center ">
      <div className="w-12 h-12 flex justify-center items-center rounded-md bg-white p-2">
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
