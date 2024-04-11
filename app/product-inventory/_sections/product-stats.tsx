import React from "react";
import Stats from "../_components/stats";

export default function ProductStats() {
  return (
    <div className="  xl:w-full grid grid-cols-1 md:grid-cols-2 xl:flex  xl:flex-row gap-[4rem] place-items-center ">
      <Stats title="Total products" value="75" />
      <Stats title="Out of stocks" value="2" />
      <Stats title="Total items" value="342" />
      <Stats title="Categories" value="12" />
    </div>
  );
}
