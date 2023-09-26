import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
  name: "product",
  initialState: {
    currentProduct: "",
    cart: [],
    indivisual: [],
    cartCount: 0,
  },
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    setCart: (state, action) => {
      const payload = { ...action.payload, count: 1 };
      const indivisual = JSON.parse(JSON.stringify(state.indivisual));
      const allData = JSON.parse(JSON.stringify(state.cart));
      if (indivisual.includes(payload._id)) {
        const a = allData.map((item) => {
          if (item._id == payload._id) {
            item.count += 1;
            return item;
          } else {
            return item;
          }
        });
        state.cart = a;
      } else {
        state.cart.push(payload);
        state.cartCount += 1;
        state.indivisual.push(payload._id);
      }
    },
    removeFromCart: (state, action) => {
      const allData = JSON.parse(JSON.stringify(state.cart));
      const indivisual = JSON.parse(JSON.stringify(state.indivisual));
      const updatedData = allData.map((item) => {
        if (item._id == action.payload) {
          if (item.count > 1) {
            item.count -= 1;

            return item;
          } else {
            let updatedIndivisual = indivisual.filter(
              (item) => item != action.payload
            );
            state.indivisual = updatedIndivisual;
            state.cartCount -= 1;
            return null;
          }
        } else {
          return item;
        }
      });
      // console.log(updatedData, "////////////////////");
      const finalData = updatedData.filter((item) => item != null);
      state.cart = finalData;
    },
  },
});

export const { setCurrentProduct, setCart, removeFromCart } = product.actions;

export default product.reducer;
