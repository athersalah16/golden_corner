import { Download } from "lucide-react";

function HeroSection() {
  return (
    <section className='flex  w-full min-h-screen px-5 items-center bg-[url("/background.png")] object-cover bg-cover'>
      <div className="flex w-full flex-col px-5 gap-5">
  
        <div className="font-bold text-4xl lg:text-5xl">
          <h1 className="text-yellow-500  ">Your Gateway</h1>
          <span className="text-white"> To Global Market</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <a
            href="/oman_company_profile.pdf"
            download
            className="bg-yellow-500 text-white rounded-md px-4 py-3 hover:bg-amber-600/88 duration-300 flex flex-row gap-2.5"
          >
            <Download /> Company Profile
          </a>
          <a
            href="/services"
            className="bg-taupe-50 hover:bg-yellow-500 text-yellow-500 hover:text-white border border-gray-400 hover:border-none rounded-md px-4 py-3  duration-300 flex flex-row gap-2.5"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
