"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination,
} from "@nextui-org/react";
import TableSorter from "../_components/table-sorter";
import { useDispatch } from "react-redux";
import {
  categorySelected,
  materialsSelected,
} from "../_redux/table-filter-slice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { categoriesData, materialsData, sortbyData } from "../_data";
export default function ProductTable() {
  const rows = [
    {
      key: "1",
      productName: "Tony Reichert",
      material: "CEO",
      category: "Active",
      price: "CEO",
      inventory: "Active",
      dateAdded: "Active",
    },
    {
      key: "2",
      productName: "Tony Reichert",
      material: "CEO",
      category: "Active",
      price: "CEO",
      inventory: "Active",
      dateAdded: "Active",
    },
    {
      key: "3",
      productName: "Tony Reichert",
      material: "CEO",
      category: "Active",
      price: "CEO",
      inventory: "Active",
      dateAdded: "Active",
    },
    {
      key: "4",
      productName: "Tony Reichert",
      material: "CEO",
      category: "Active",
      price: "CEO",
      inventory: "Active",
      dateAdded: "Active",
    },
    {
      key: "5",
      productName: "Tony Reichert",
      material: "CEO",
      category: "Active",
      price: "CEO",
      inventory: "Active",
      dateAdded: "Active",
    },
  ];

  const columns = [
    {
      key: "productName",
      label: "PRODUCT NAME",
    },
    {
      key: "material",
      label: "MATERIAL",
    },
    {
      key: "category",
      label: "CATEGORY",
    },
    {
      key: "price",
      label: "PRICE",
    },
    {
      key: "inventory",
      label: "INVENTORY",
    },
    {
      key: "dateAdded",
      label: "DATE ADDED",
    },
  ];
  const dispatch = useDispatch();
  const state = useAppSelector((state: RootState) => state.ProductFilter);
  const categorySelectionChanged = (e: any) => {
    dispatch(categorySelected(e.target.value));
  };
  const materialsSelectionChanged = (e: any) => {
    dispatch(materialsSelected(e.target.value));
  };
  const sortbySelectionChanged = (e: any) => {
    dispatch(categorySelected(e.target.value));
  };

  return (
    <>
      <div className="w-full flex flex-wrap gap-5 md:flex-row justify-between">
        <div className="flex gap-5 flex-wrap md:flex-row ">
          <TableSorter
            title={"Category:"}
            onSelectedChanged={categorySelectionChanged}
            item={categoriesData}
          />
          <TableSorter
            title={"Material:"}
            onSelectedChanged={materialsSelectionChanged}
            item={materialsData}
          />
        </div>
        <TableSorter
          title={"Sort by:"}
          onSelectedChanged={sortbySelectionChanged}
          item={sortbyData}
        />
      </div>

      <div className="flex flex-col h-[25rem]">
        <Table
          selectionMode="multiple"
          aria-label="Example static collection table"
          removeWrapper
          shadow="lg"
          isHeaderSticky
          classNames={{
            base: "max-h-[500px] overflow-y-auto",
            th: "bg-blue-100  font-bold text-gray-500",
            td: "text-lg bg-white",
            table: "border-separate border-spacing-y-1.5 bg-transparant ",
          }}>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={state.productTable}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className=" w-full flex justify-center grow items-end">
          <Pagination total={5} initialPage={1} showControls loop />
        </div>
      </div>
    </>
  );
}
