import { Category } from "../_model/category";
import { Material } from "../_model/material";
import { ProductTable } from "../_model/product-table";
import { SortBy } from "../_model/sortby";

export interface TableFilterState {
  category: Category;
  material: Material;
  sortby: SortBy;
  productTable: ProductTable[];
}
