import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../store/contacts/contactSlice";

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
    },
});
