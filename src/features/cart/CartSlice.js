import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

// 買い物かごの初期化 カート内で使用するものを定義する 動的に数値が変わるもの
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      return { cartItems: [], amount: 0, total: 0 };
    },
    removeItem: (state, action) => {
      // actionはその要素のtypeとpayloadを取得する
      
    },
  },
});

console.log(cartSlice);
export const { clearCart } = cartSlice.actions;
export const { removeItem } = cartSlice.actions;
export default cartSlice.reducer;
