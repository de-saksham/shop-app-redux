import { ProductAction } from '../types/productsActionTypes';
import { OrderResponse, Product } from '../types';
export declare const init: (isSuccess: boolean, totalPages: number) => ProductAction;
export declare const isLoading: () => {
    type: string;
};
export declare const storeCategory: (category: string) => {
    type: string;
    category: string;
};
export declare const storeProducts: (products: Product[]) => {
    type: string;
    products: Product[];
};
export declare const addToCart: (product: Product, quantity: number, type: string) => {
    type: string;
    product: Product;
    quantity: number;
    variant: string;
};
export declare const updateCurrentPage: (currentPage: number) => {
    type: string;
    currentPage: number;
};
export declare const isModalActive: () => {
    type: string;
};
export declare const orderStatus: (orderStatus: boolean, data: OrderResponse) => {
    type: string;
    orderStatus: boolean;
    data: OrderResponse;
};
