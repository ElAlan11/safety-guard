import { configureStore } from "@reduxjs/toolkit";
import { serviceApi } from "./serviceApi";

const store = configureStore({
  reducer: {
    [serviceApi.reducerPath]: serviceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
      },
    })
      .concat(serviceApi.middleware)
      .prepend([
      ]),
});

export default store;
