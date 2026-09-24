import Logo from "@/app/common/Logo";
import NavLinks from "@/app/common/NavLinks";

function Footer() {
  return (
    <div className="w-full min-h-full flex flex-col px-4 py-5 bg-blue-950 gap-5">
      <div className="flex flex-col lg:flex-row lg:justify-between py-5">
        <div className="flex flex-col gap-3">
          <Logo />
          <p>Your Gateway To Global Market</p>
        </div>
        <div className="flex flex-col gap-3.5  py-5">
          <p className="text-gray-400">Navigate</p>
          <NavLinks linksStyle="flex flex-col gap-4" />
        </div>
        <div>
          <p>Get in Touch</p>
        </div>
      </div>

      <div>
        <p>© {new Date().getFullYear()} Golden Corner. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
