import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id?: number;
  images: string[];
  name: string;
  miniDescription: string;
  price: string;
  discountedPrice: string;
  discount: string;
}
interface paginationInitialState {
  itemsPerPage: number;
  totalPages: number;
  products: Product[];
  productsPerPage: number;
  currentPage: number;
  sortBy: string;
  showproductsPerPage: string;
  setShowListView: string;
  filteredProducts: Product[];
  searchQuery: string;
}
const initialState: paginationInitialState = {
  products: [],
  productsPerPage: 4,
  currentPage: 1,
  sortBy: "default",
  showproductsPerPage: "4",
  setShowListView: "grid",
  itemsPerPage: 0,
  totalPages: 0,
  filteredProducts: [],
  searchQuery: "",
};
export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },
    prevPage: (state) => {
      state.currentPage -= 1;
    },
    fetchProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    sortingProducts: (state, action) => {
      state.sortBy = action.payload;
      if (state.sortBy === "asc") {
        state.filteredProducts = state.filteredProducts.sort((a, b) => {
          return Number(a.price) - Number(b.price);
        });
      } else if (state.sortBy === "desc") {
        state.filteredProducts = state.filteredProducts.sort((a, b) => {
          return Number(b.price) - Number(a.price);
        });
      }
    },
    showProductsPerPage: (state, action: PayloadAction<string>) => {
      state.showproductsPerPage = action.payload;
      if (state.showproductsPerPage === "4") {
        state.productsPerPage = 4;
      } else if (state.showproductsPerPage === "8") {
        state.productsPerPage = 8;
      } else if (state.showproductsPerPage === "16") {
        state.productsPerPage = 16;
      } else if (state.showproductsPerPage === "24") {
        state.productsPerPage = 24;
      }
    },
    showListView: (state, action: PayloadAction<string>) => {
      state.setShowListView = action.payload;
    },
    searchProducts: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      if (state.searchQuery.trim() === "") {
        // If search is empty, show all products
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter((product) =>
          product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }
    },
  },
});

export const {
  fetchProducts,
  nextPage,
  prevPage,
  sortingProducts,
  showProductsPerPage,
  showListView,
  searchProducts,
} = paginationSlice.actions;

export default paginationSlice.reducer;
