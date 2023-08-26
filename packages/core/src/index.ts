import van, { State, StateView } from "vanjs-core";

export interface ReadonlyState<T> extends StateView<T> {
  readonly val: T;
}

export const lazy = <T>(f: () => T) => {
  return f as unknown as T;
};

export function createState<T>(initialValue: T): State<T>;

export function createState<T>(initialValue: T | null): ReadonlyState<T>;

export function createState<T = undefined>(): State<T | undefined>;

export function createState<T>(v?: T) {
  return van.state(v);
}

export * from "./jsx-runtime";
export * from "./type";
