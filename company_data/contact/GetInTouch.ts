import { ContactInfoType } from "@/app/types/contact/ContactInfoType";
import { Mail, MapPin, Phone } from "lucide-react";

export const contactInfo: ContactInfoType[] = [
  {
    key: "Location",
    value: "Bousher,MuscatGovernate,Oman",
    icon: MapPin,
    link: process.env.NEXT_PUBLIC_LOCATION,
  },
  {
    key: "Mobile",
    value: "+968 9382 6689",
    icon: Phone,
    link: process.env.NEXT_PUBLIC_WHATS_APP_LINK,
  },
  { key: "Email", value: "Info@Omangoldencorner.Com", icon: Mail, link: process.env.NEXT_PUBLIC_EMAIL },
];
