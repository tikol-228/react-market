import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  name: string,
  category: string,
  discountPercent: number,
  id: number,
  imageSrc: string,
  isNew: boolean,
  oldPrice: number,
  price: string,
  rating: number,
};

type ProductsState = {
  products: Product[];
};

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    logText: () => {console.log(1)},
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct, logText } = productsSlice.actions;
export default productsSlice.reducer;