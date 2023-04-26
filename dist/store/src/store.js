"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var redux_1 = require("redux");
var products_1 = __importDefault(require("./reducers/products"));
var reducer = (0, redux_1.combineReducers)({
    ProductReducer: products_1.default,
});
exports.store = (0, toolkit_1.configureStore)({
    reducer: { reducer: reducer },
    middleware: function (getDefaultMiddleware) { return getDefaultMiddleware(); }
});
