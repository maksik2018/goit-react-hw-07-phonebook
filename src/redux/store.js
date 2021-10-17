import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./reducers/contactsSlice";
import filter from "./reducers/filterSlice";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],

  devTools: process.env.NODE_ENV === "development",
});
