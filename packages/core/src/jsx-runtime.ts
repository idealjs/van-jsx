import * as CSS from "csstype";
import van, { State } from "vanjs-core";

import { ComponentChildren } from "./type";

export const styleToString = (style: CSS.Properties) => {
  return Object.entries(style).reduce(
    (acc, key) =>
      acc +
      key[0]
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase() +
      ":" +
      key[1] +
      ";",
    ""
  );
};

const mergeStyle = (
  props: Record<any, any>,
  style?: CSS.Properties | (() => CSS.Properties)
) => {
  if (typeof style === "function") {
    return {
      ...props,
      style: () => {
        return styleToString(style());
      },
    };
  }

  if (style == null) {
    return props;
  }

  return {
    ...props,
    style: styleToString(style),
  };
};

export const jsx = (
  jsxTag: string | Function,
  {
    children,
    style,
    ref,
    ...props
  }: {
    children?: ComponentChildren;
    style?: CSS.Properties | (() => CSS.Properties);
    ref?: State<Element>;
  }
) => {
  if (typeof jsxTag === "string") {
    const ele = van.tags[jsxTag](mergeStyle(props, style), children);

    if (ref != null) {
      ref.val = ele;
    }

    return ele;
  }
  if (typeof jsxTag === "function") {
    return jsxTag({ ...props, ref, style, children });
  }
};

export { jsx as jsxDEV, jsx as jsxs };

export type { JSX } from "./jsx-internal";
