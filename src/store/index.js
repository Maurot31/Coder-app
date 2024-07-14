import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../fetures/shop/ShopSlice";
import { shopApi } from "../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "../fetures/cart/CartSlice";
import authReducer from "../fetures/user/UserSlice";
import { authApi } from "../services/authService";

//
const store = configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
    auth: authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
