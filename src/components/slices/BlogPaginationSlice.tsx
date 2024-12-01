import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  totalPages: 1,
  itemsPerPage: 5,
};

const blogPaginationSlice = createSlice({
  name: "blogPagination",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const { setPage, setTotalPages, setItemsPerPage } =
  blogPaginationSlice.actions;

export default blogPaginationSlice.reducer;
