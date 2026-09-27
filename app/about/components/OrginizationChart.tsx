"use client";

import { Tree, TreeNode } from "react-organizational-chart";
import OrganizationNode from "./OrginizationNode";
import { OrginizationStructure } from "@/app/company_data/about/organization_structure";
import { getChildren } from "@/app/utils/getChildren";

export default function OrganizationChart() {
  const data = OrginizationStructure.data;
 const childrenList = [...OrginizationStructure.operations,...OrginizationStructure.corporateSupport]
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex w-max min-w-full justify-center">
        <Tree
          lineWidth="2px"
          lineColor="#C8922A"
          lineBorderRadius="8px"
          lineStyle="solid"
          lineHeight="30px"
          nodePadding="10px"
          label={
            <OrganizationNode
              title="Managing Director"
              description={
                "Leads the company, makes strategic decisions, and oversees all activities."
              }
            />
          }
        >
          {data.map(({ title, description, id }) => {
            const children = getChildren(childrenList, id);
            return (
              <TreeNode
                className="text-blue-900"
                key={id}
                label={
                  <OrganizationNode title={title} description={description} />
                }
              >
      
                {children.map((child) => (
                  <TreeNode
                    key={child.id}
                    label={
                      <OrganizationNode
                        title={child.title}
                        description={child.description}
                      />
                    }
                  />
                ))}
              </TreeNode>
            );
          })}
        </Tree>
      </div>
    </div>
  );
}
