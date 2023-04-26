export declare const updateObject: (oldObject: Object, updatedObject: Object) => {
    constructor: Function;
    toString(): string;
    toLocaleString(): string;
    valueOf(): Object;
    hasOwnProperty(v: PropertyKey): boolean;
    isPrototypeOf(v: Object): boolean;
    propertyIsEnumerable(v: PropertyKey): boolean;
};
export declare function paginator(items: [], currentPage: number, perPageItems: number): Promise<{
    page: number;
    perPages: number;
    prePage: number;
    nextPage: number;
    total: 0;
    totalPages: number;
    data: never[];
}>;
