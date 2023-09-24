import van, { State, StateView } from "vanjs-core";

export const lazy = <T>(f: () => T) => {
  return f as unknown as T;
};

export function createState<T>(initialValue: T): State<T>;

export function createState<T>(initialValue: T | null): StateView<T>;

export function createState<T = undefined>(): State<T | undefined>;

export function createState<T>(v?: T) {
  return van.state(v);
}

export * from "./jsx-runtime";
export * from "./type";

export const map = <T>(
  items: State<T[]>,
  userComponent: (value: T) => Element,
  getKey: (value: T) => string | number,
) => {
  const cache: Record<string, Element | undefined> = {};

  return (parent?: DocumentFragment) => {
    if (!parent) {
      parent = document.createDocumentFragment();
    }
    items.oldVal.forEach((item) => {
      let element = cache[getKey(item)];
      element?.remove();
    });
    items.val.forEach((item) => {
      const key = getKey(item);
      let element = cache[key];
      if (element == null) {
        element = userComponent(item);
        cache[key] = element;
      }
      parent?.append(element);
    });
    console.log(JSON.stringify(parent.children));
    return parent;
  };
};
