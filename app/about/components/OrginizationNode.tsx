type OrganizationNodeProps = { title: string; description: string };

function OrganizationNode({ title, description }: OrganizationNodeProps) {
  return (
    <div className="mx-auto w-64 rounded-md bg-blue-900 px-4 py-5 text-center text-white">
      <h3 className="text-2xl">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
export default OrganizationNode