import { createSlice } from "@reduxjs/toolkit";

interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  itemsPerPage: 2,
};

const blogPaginationSlice = createSlice({
  name: "blogPagination",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },
    prevPage: (state) => {
      state.currentPage -= 1;
    },
  },
});

export const { nextPage, prevPage } =
  blogPaginationSlice.actions;

export default blogPaginationSlice.reducer;
