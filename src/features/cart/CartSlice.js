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
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
