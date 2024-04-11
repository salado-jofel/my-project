import React from "react";
import ProductHeader from "./_sections/product-header";
import ProductStats from "./_sections/product-stats";
import ProductTable from "./_sections/product-table";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function ProductInventoryPage() {
  return (
    <div className="bg-slate-100 h-screen overflow-auto mt-[6rem] xl:mt-0">
      <div className="px-14 py-14 flex flex-col gap-8">
        <div className="flex justify-center ">
          <ProductHeader />
        </div>
        <div className="flex justify-center ">
          <ProductStats />
        </div>
        <ProductTable />
      </div>
    </div>
  );
}
