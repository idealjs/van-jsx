export type PropsWithChildren<P> = P & {
  children?: ComponentChildren | undefined;
};

export interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): Element | null;
}

export type ComponentType<P = {}> = FunctionComponent<P>;

export type ComponentChild =
  | Element
  | string
  | number
  | bigint
  | boolean
  | null
  | undefined;

export type ComponentChildren = ComponentChild[] | ComponentChild;
