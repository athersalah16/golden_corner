import type { OrginizationStructure } from "@/app/types/about/OrganizationStructure";

const organizationStructure: OrginizationStructure = {
  corporateSupport: [
    {
      id: "finance",
      parentId: "corporate-support",
      title: "Finance & Administration",
      description: "Manages accounts, invoices, and administrative operations.",
    },

    {
      id: "hse-quality",
      parentId: "corporate-support",
      title: "HSE & Quality Control",
      description:
        "Monitors quality and safety, ensuring compliance with technical standards.",
    },

    {
      id: "hr",
      parentId: "corporate-support",
      title: "HR",
      description: "Manages human resources and employee-related activities.",
    },
  ],
  data: [
    {
      id: "business-development",
      parentId: "managing",
      title: "Business Development",
      description:
        "Follows up on tender opportunities and maintains communication with clients and consultants.",
    },

    {
      id: "operations",
      parentId: "managing",
      title: "Operations Manager",
      description:
        "Monitors project execution and supervises the supply and project teams.",
    },
    {
      id: "corporate-support",
      parentId: "managing",
      title: "Corporate Support",
      description:
        "Supports the company through finance, administration, human resources, and quality functions.",
    },
  ],
  operations: [
    {
      id: "procurement",
      parentId: "operations",
      title: "Procurement / Supply Team",
      description:
        "Supplies materials and equipment, ensuring delivery according to specifications.",
    },

    {
      id: "project-coordination",
      parentId: "operations",
      title: "Project Coordination Team",
      description:
        "Coordinates projects with clients and contractors, ensuring adherence to schedules.",
    },
  ],
};

export { organizationStructure as OrginizationStructure };
