import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { categoriesData } from "../_data";

export default function TableSorter({
  title,
  onSelectedChanged,
  item,
}: {
  title: string;
  onSelectedChanged: React.ChangeEventHandler<HTMLSelectElement>;
  item: Iterable<object>;
}) {
  return (
    <div className="flex  items-center gap-2 0">
      <div>{title}</div>
      <Select
        className="w-[10rem]"
        items={item}
        placeholder="Select filter"
        selectionMode="single"
        aria-label="filter"
        onChange={onSelectedChanged}>
        {(item: any) => (
          <SelectItem key={item.name} className="capitalize">
            {item.name}
          </SelectItem>
        )}
      </Select>
    </div>
  );
}
