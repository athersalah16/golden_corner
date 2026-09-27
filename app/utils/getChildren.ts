import { Department } from "../types/about/OrganizationStructure";

export const getChildren = (data: Department[], parentID: string): Department[] => {
  return data.filter((item) => item.parentId === parentID);
};
