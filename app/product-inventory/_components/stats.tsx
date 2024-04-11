import React from "react";

export default function Stats({ title, value }: any) {
  return (
    <div className="flex flex-col w-[10rem] border-b-2  xl:border-b-0 xl:border-r-2 items-center xl:items-start ">
      <div className="text-gray-400 font-semibold">{title}</div>
      <div className="text-blue-500 font-bold text-[1.5rem]">{value}</div>
    </div>
  );
}
