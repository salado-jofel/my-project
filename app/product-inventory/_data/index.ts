import { Category } from "../_model/category";
import { Material } from "../_model/material";
import { SortBy } from "../_model/sortby";
import { ProductTable } from "../_model/product-table";

export const categoriesData: Category[] = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 1,
    name: "Earrings",
  },
  {
    id: 2,
    name: "Bracelets",
  },
];

export const materialsData: Material[] = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 1,
    name: "Pearl Gold",
  },
  {
    id: 2,
    name: "Silver Gold",
  },
  {
    id: 3,
    name: "Gold",
  },
];

export const sortbyData: SortBy[] = [
  {
    id: 0,
    name: "Newest",
  },
  {
    id: 1,
    name: "Oldest",
  },
];

export const productTable: ProductTable[] = [
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
