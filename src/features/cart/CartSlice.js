import { createSlice } from "@reduxjs/toolkit";

// 買い物かごの初期化 カート内で使用するものを定義する 動的に数値が変わるもの
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
