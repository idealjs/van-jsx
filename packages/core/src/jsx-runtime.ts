import { JSXElementType, VanElement } from "./createElement";
import { InnerElement, Key, TagOption } from "./type";

export namespace JSX {
  export type ElementType = string | JSXElementType<any>;
  export interface ElementAttributesProperty {
    props: object;
  }
  export interface ElementChildrenAttribute {
    children: object;
  }

  export interface Element extends VanElement {}

  export interface IntrinsicAttributes {
    key?: Key;
  }

  export type IntrinsicElements = {
    [K in keyof InnerElement]: TagOption<K>;
  };
}
