import React from "react";
import GroupItem from "components/Group/GroupItem";

type TypeDoc = {
  group: any;
};

function Groups({ group }: TypeDoc) {
  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2 px-24 py-10">
        {group.map((data: any, index: React.Key) => {
          return <GroupItem key={index} agroup={data} />;
        })}
      </div>
    </div>
  );
}

export default Groups;
