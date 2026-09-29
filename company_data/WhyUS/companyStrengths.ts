import {
  ShieldCheck,
  UsersRound,
  ClipboardCheck,
  Clock3,
  RefreshCw,
  Shield,
  Landmark,
} from "lucide-react";

import { CompanyStrength } from "@/app/types/WhyUs/CompanyStrengths";

export const companyStrengths: CompanyStrength[] = [
  {
    id: "01",
    title: "Reliability",
    icon: ShieldCheck,
    description: "Reliable Material Supply Solutions Across Oman.",
    details: "Ensure Projects Receive The Right Materials On Time.",
  },

  {
    id: "02",
    title: "Coordination",
    icon: UsersRound,
    description:
      "Efficient Coordination With Consultants And Main Contractors.",
    details:
      "Smooth Communication Ensures Project Requirements Are Fully Met.",
  },

  {
    id: "03",
    title: "Compliance",
    icon: ClipboardCheck,
    description:
      "Strict Adherence To Project Specifications And Technical Requirements.",
    details:
      "Ensures All Works And Materials Meet Quality And Regulatory Standards.",
  },

  {
    id: "04",
    title: "Timely Delivery",
    icon: Clock3,
    description:
      "Commitment To Delivering Materials And Project-Based Works Within Deadlines.",
    details: "Help Clients Maintain Their Project Schedules Without Delay.",
  },

  {
    id: "05",
    title: "Flexibility & Responsiveness",
    icon: RefreshCw,
    description: "Ability To Adapt To Client Needs And Project Changes.",
    details: "Quick Response To Requests Ensures Smooth Workflow.",
  },

  {
    id: "06",
    title: "Quality & Safety Commitment",
    icon: Shield,
    description:
      "Focus On High-Quality Standards In All Supply And Execution Works.",
    details:
      "Ensures Safety And Reliability Throughout Project Lifecycle.",
  },

  {
    id: "07",
    title: "ICV (In Country Value)",
    icon: Landmark,
    description:
      "Supporting Omani Employment And Skills Development Through Job Opportunities, Training, And Workforce Development Aligned With Industry Needs.",
    details:
      "Grow In-Country Economic Value: Strengthen Local Production, SMEs, And Spending On Omani Goods And Services.",
  },
];