import { State } from '../types';
export declare const initialState: State;
declare const reducer: (state: State, action: any) => {
    constructor: Function;
    toString(): string;
    toLocaleString(): string;
    valueOf(): Object;
    hasOwnProperty(v: PropertyKey): boolean;
    isPrototypeOf(v: Object): boolean;
    propertyIsEnumerable(v: PropertyKey): boolean;
};
export default reducer;
