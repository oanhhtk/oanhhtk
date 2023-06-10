import CardItem from "@/components/CardItem";
import React from "react";

interface ListProps {
  list: Partial<ProjectItemType>[];
}

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <ul className="relative flex flex-1 overflow-x-scroll snap-center snap-mandatory snap-x [&:not(.stiky)]:snap-center lg:flex lg:flex-wrap lg:justify-center gap-4">
      {list.map((data, i) => (
        <li key={i} className="sticky left-0 flex h-full ">
          <CardItem
            key={data.id}
            data={data}
            index={i}
            className="snap-center"
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
