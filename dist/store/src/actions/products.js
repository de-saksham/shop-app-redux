"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStatus = exports.isModalActive = exports.updateCurrentPage = exports.addToCart = exports.storeProducts = exports.storeCategory = exports.isLoading = exports.init = void 0;
var actionTypes = __importStar(require("./actionTypes"));
var init = function (isSuccess, totalPages) { return ({
    type: actionTypes.INIT,
    isSuccess: isSuccess,
    totalPages: totalPages,
}); };
exports.init = init;
var isLoading = function () { return ({
    type: actionTypes.IS_LOADING
}); };
exports.isLoading = isLoading;
var storeCategory = function (category) { return ({
    type: actionTypes.STORE_CATEGORY,
    category: category
}); };
exports.storeCategory = storeCategory;
var storeProducts = function (products) { return ({
    type: actionTypes.STORE_PRODUCTS,
    products: products
}); };
exports.storeProducts = storeProducts;
var addToCart = function (product, quantity, type) { return ({
    type: actionTypes.ADD_TO_CART,
    product: product,
    quantity: quantity,
    variant: type
}); };
exports.addToCart = addToCart;
var updateCurrentPage = function (currentPage) { return ({
    type: actionTypes.UPDATE_CURRENT_PAGE,
    currentPage: currentPage,
}); };
exports.updateCurrentPage = updateCurrentPage;
var isModalActive = function () { return ({
    type: actionTypes.IS_MODAL_ACTIVE,
}); };
exports.isModalActive = isModalActive;
var orderStatus = function (orderStatus, data) { return ({
    type: actionTypes.ORDER_STATUS,
    orderStatus: orderStatus,
    data: data,
}); };
exports.orderStatus = orderStatus;
