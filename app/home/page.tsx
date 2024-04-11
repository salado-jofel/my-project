import React from "react";
import HomeHeader from "./_sections/home-header";

export default function HomePage() {
  return (
    <div className="bg-slate-100 h-screen overflow-auto mt-[6rem] xl:mt-0">
      <div className="px-14 py-14 flex flex-col gap-8 bg-red-500">
        <div className="flex justify-center ">
          <HomeHeader />
        </div>
      </div>
    </div>
  );
}
