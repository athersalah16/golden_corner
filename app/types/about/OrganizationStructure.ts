export type Department = {
  id: string;
  parentId: string 
  title: string;
  description: string;
};

export type OrginizationStructure = {
  corporateSupport: Department[];
  operations: Department[];

  data: Department[];
};
