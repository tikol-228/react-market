import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import products from "../mock/products";
import { idText } from "typescript";

export type Product = {
  name: string,
  category: string,
  discountPercent: number,
  id: number,
  imageSrc: string,
  isNew: boolean,
  // oldPrice: number,
  price: number,
  rating: number,
};

type ProductsState = {
  products: Product[];
  cartProductIds: number[]
};

const initialState: ProductsState = {
  products,
  cartProductIds: []
};

// в экшене addtocart мы проверяем если есть то мы убераем если нет то мы добавляем

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
    addToCart: (state, action: PayloadAction<number>) => {
      state.cartProductIds.push(action.payload);
      console.log(state.cartProductIds);
      console.log(1)
      const id = action.payload;
      const index = state.cartProductIds.indexOf(id);
      if (index === -1) {
        state.cartProductIds.push(id);
      } else {
        state.cartProductIds.splice(index, 1);
      }
    },
    getCartProducts: (state) => {
        state.products.filter(
        (product) => state.cartProductIds.includes(product.id)
      )
    }
  },
});

export const { addProduct, removeProduct, addToCart, logText } = productsSlice.actions;
export default productsSlice.reducer;