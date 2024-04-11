import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TableFilterState } from "./table-filter-state";
import { Category } from "../_model/category";

export const initialState: TableFilterState = {
  category: {
    id: 0,
    name: "All",
  },
  material: {
    id: 0,
    name: "All",
  },
  sortby: {
    id: 0,
    name: "Newest",
  },
  productTable: [
    {
      key: "1",
      productName: "",
      material: "",
      category: "",
      price: "",
      inventory: "",
      dateAdded: "",
    },
  ],
};

const tableFilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addProductClicked: (
      state: TableFilterState,
      action: PayloadAction<string>
    ) => {
      return {
        ...state,
        productTable: {
          ...state.productTable,
          productName: action.payload,
          material: action.payload,
          category: action.payload,
          price: action.payload,
          inventory: action.payload,
          dateAdded: action.payload,
        },
      };
    },
    categorySelected: (
      state: TableFilterState,
      action: PayloadAction<string>
    ) => {
      return {
        ...state,
        category: {
          ...state.category,
          name: action.payload,
        },
      };
    },
    materialsSelected: (
      state: TableFilterState,
      action: PayloadAction<string>
    ) => {
      return {
        ...state,
        material: {
          ...state.material,
          name: action.payload,
        },
      };
    },
    sortbySelected: (
      state: TableFilterState,
      action: PayloadAction<string>
    ) => {
      return {
        ...state,
        sortby: {
          ...state.sortby,
          name: action.payload,
        },
      };
    },
  },
});

export const {
  categorySelected,
  materialsSelected,
  sortbySelected,
  addProductClicked,
} = tableFilterSlice.actions;
export default tableFilterSlice.reducer;
