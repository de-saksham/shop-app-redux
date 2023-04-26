import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import ProductReducer from './reducers/products';

const reducer = combineReducers({
    ProductReducer,
});

export const store = configureStore({
    reducer: { reducer },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware()
});
