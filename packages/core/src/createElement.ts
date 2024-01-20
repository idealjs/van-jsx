import * as CSS from "csstype";
import van, { State } from "vanjs-core";

import { setAttribute } from "./hyper";
import { Primitive } from "./type";

export type VanElement = Element;

export type JSXElementType<P> = (props: P) => VanNode | VanElement;

export type PrimitiveChild = Primitive | State<Primitive>;

export type VanNode =
  | VanElement
  | PrimitiveChild
  | VanNode[]
  | (() => VanNode)
  | null;

const createElement = (
  jsxTag: string | Function,
  {
    children,
    style,
    ref,
    ...props
  }: {
    children?: VanNode;
    style?: CSS.Properties | (() => CSS.Properties);
    ref?: State<Element>;
  }
) => {
  if (typeof jsxTag === "string") {
    // TODO VanNode to VanElement
    const ele = van.tags[jsxTag](children);

    for (const [key, value] of Object.entries(props ?? {})) {
      // Auto Update Attribute
      if (typeof value === "function" && !key.startsWith("on")) {
        van.derive(() => {
          let attr = value();
          setAttribute(ele, key, attr);
        });
        continue;
      }

      // Add Event Listener
      if (typeof value === "function" && key.startsWith("on")) {
        ele.addEventListener(
          key.replace("on", "").toLowerCase(),
          value as EventListenerOrEventListenerObject
        );
        continue;
      }
      setAttribute(ele, key, value);
      continue;
    }

    if (ref != null) {
      ref.val = ele;
    }

    return ele;
  }
  if (typeof jsxTag === "function") {
    return jsxTag({ ...props, ref, style, children });
  }
};

export default createElement;
