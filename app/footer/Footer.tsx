import Logo from "@/app/common/Logo";
import NavLinks from "@/app/common/NavLinks";
import { contactInfo } from "../company_data/contact/GetInTouch";
import GetInTouch from "../contact/components/GetInTouch";

function Footer() {
  return (
    <div className="w-full min-h-full flex flex-col px-4 py-5 bg-blue-950 gap-5">
      <div className="flex flex-col lg:flex-row lg:justify-between py-5">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-white">Your Gateway To Global Market</p>

          <p className="text-sm text-gray-400 max-w-md">
            Golden Corner is an Egyptian-origin company established in 2015,
            delivering integrated supply and contracting solutions across
            construction, infrastructure, energy, and industrial sectors
          </p>
        </div>
        <div className="flex flex-col gap-3.5  py-5">
          <p className="text-gray-400 ">Navigate</p>
          <NavLinks linksStyle="flex flex-col gap-4" />
        </div>
        <div className="flex flex-col gap-4 py-5">
          <p className="text-gray-400">Get in Touch</p>
          <div className="flex flex-col gap-4">
            {contactInfo.map((data, index) => (
              <GetInTouch data={data} key={index + 1} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <p>© {new Date().getFullYear()} Golden Corner. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
