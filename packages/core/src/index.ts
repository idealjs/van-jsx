import van, { State, StateView } from "vanjs-core";

export function createState<T>(initialValue: T): State<T>;

export function createState<T>(initialValue: T | null): StateView<T>;

export function createState<T = undefined>(): State<T | undefined>;

export function createState<T>(v?: T) {
  return van.state(v);
}

export {
  default as createElement,
  default as jsx,
  default as jsxDEV,
} from "./createElement";
export * from "./type";
