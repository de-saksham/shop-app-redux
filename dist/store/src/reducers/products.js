"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = void 0;
var actionTypes = __importStar(require("../actions/actionTypes"));
var utility_1 = require("../../../utils/utility");
exports.initialState = {
    isLoading: true,
    isSuccess: false,
    totalPages: 0,
    currentPage: 1,
    activeCategory: 'VEGETABLES',
    products: [],
    isCartEmpty: true,
    isModalActive: false,
    cart: [],
    orderStatus: false,
};
var init = function (state, action) {
    return (0, utility_1.updateObject)(state, {
        isLoading: !action.isSuccess,
        totalPages: action.totalPages,
        isSuccess: action.isSuccess,
    });
};
var isLoading = function (state) {
    return (0, utility_1.updateObject)(state, {
        isLoading: true,
    });
};
var updateCategory = function (state, action) {
    return (0, utility_1.updateObject)(state, {
        activeCategory: action.category,
        orderStatus: false,
    });
};
var updateProducts = function (state, action) {
    return (0, utility_1.updateObject)(state, {
        products: action.products
    });
};
var updateCart = function (state, action) {
    var cart = state.cart;
    var product = action.product, quantity = action.quantity, variant = action.variant;
    // Check if the product already exists in the cart
    var existingProductIndex = cart.findIndex(function (item) { return item._id === product._id; });
    if (existingProductIndex !== -1) {
        // If the product already exists, update its quantity
        var updatedCart = cart.map(function (item, index) {
            if (index === existingProductIndex) {
                console.log('var', variant);
                var newQuantity = variant === 'inc' ? item.quantity + 1 : variant === 'dec' ? item.quantity - 1 : item.quantity + quantity;
                if (newQuantity === 0) {
                    // If the new quantity is 0, remove the item from the cart
                    return null;
                }
                else {
                    return __assign(__assign({}, item), { quantity: newQuantity });
                }
            }
            return item;
        }).filter(Boolean); // Filter out the null items
        return __assign(__assign({}, state), { cart: updatedCart });
    }
    else {
        // If the product does not exist, add it to the cart
        return __assign(__assign({}, state), { cart: __spreadArray(__spreadArray([], cart, true), [__assign(__assign({}, product), { quantity: quantity })], false) });
    }
};
var updateCurrentPage = function (state, action) {
    return (0, utility_1.updateObject)(state, {
        currentPage: action.currentPage,
    });
};
var isModalActive = function (state) {
    return (0, utility_1.updateObject)(state, {
        isModalActive: !state.isModalActive,
        orderStatus: false,
    });
};
var statusOrder = function (state, action) {
    if (action.orderStatus) {
        return (0, utility_1.updateObject)(state, {
            orderStatus: true,
            cart: []
        });
    }
    else {
        return (0, utility_1.updateObject)(state, {
            orderStatus: false
        });
    }
};
var reducer = function (state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case actionTypes.INIT:
            return init(state, action);
        case actionTypes.IS_LOADING:
            return isLoading(state);
        case actionTypes.STORE_CATEGORY:
            return updateCategory(state, action);
        case actionTypes.STORE_PRODUCTS:
            return updateProducts(state, action);
        case actionTypes.ADD_TO_CART:
            return updateCart(state, action);
        case actionTypes.UPDATE_CURRENT_PAGE:
            return updateCurrentPage(state, action);
        case actionTypes.IS_MODAL_ACTIVE:
            return isModalActive(state);
        case actionTypes.ORDER_STATUS:
            return statusOrder(state, action);
        default: return state;
    }
};
exports.default = reducer;
