import { CompanyStrength } from "@/app/types/WhyUs/CompanyStrengths";
import {
  Award,
  Building2,
  ShieldCheck,
  Clock3,
  Handshake,
  Lightbulb,
  Users
} from "lucide-react";



export const objectives: CompanyStrength[] = [
  {
    id: "01",
    title: "Quality Solutions",
    icon: Award,
    description:
      "Deliver high-quality supply and contracting solutions that meet project specifications and client expectations.",
    details:
      "Focused on delivering reliable solutions that meet project requirements.",
  },

  {
    id: "02",
    title: "Regional Development",
    icon: Building2,
    description:
      "Support development and infrastructure projects across Oman and the region.",
    details:
      "Contributing to infrastructure growth and development across the region.",
  },

  {
    id: "03",
    title: "Compliance & Safety",
    icon: ShieldCheck,
    description:
      "Ensure full compliance with quality, safety, and environmental standards in all operations.",
    details:
      "Maintaining responsible and compliant operations across every project.",
  },

  {
    id: "04",
    title: "Operational Excellence",
    icon: Clock3,
    description:
      "Achieve operational excellence through efficient planning, cost control, and timely delivery.",
    details:
      "Optimizing resources and processes to deliver projects efficiently.",
  },

  {
    id: "05",
    title: "Strategic Partnerships",
    icon: Handshake,
    description:
      "Strengthen long-term relationships with clients, suppliers, and strategic partners.",
    details:
      "Building trusted partnerships that support long-term mutual growth.",
  },

  {
    id: "06",
    title: "Innovation & Technology",
    icon: Lightbulb,
    description:
      "Adopt innovative solutions and modern technologies to enhance performance and project outcomes.",
    details:
      "Using modern approaches to improve efficiency, performance, and results.",
  },

  {
    id: "07",
    title: "Skilled Team",
    icon: Users,
    description:
      "Develop a skilled and professional team capable of supporting sustainable growth.",
    details:
      "Investing in people and capabilities to support sustainable development.",
  },
];