import React from "react";
import ResourceItem from "components/Resource/ResourceItem";

type TypeDoc = {
  resource: any;
};

function Documents({ resource }: TypeDoc) {
  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2 px-24 py-10">
        {resource?.map((data, index) => {
          console.log("data:", data);
          return <ResourceItem key={index} aresource={data} />;
        })}
      </div>
    </div>
  );
}

export default Documents;
