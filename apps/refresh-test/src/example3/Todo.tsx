import { lazy } from "@idealjs/van-jsx";
import van, { State } from "vanjs-core";

const Todo = () => {
  const items = van.state<number[]>([]);
  let count = 0;
  return (
    <div>
      <button onclick={() => {
          items.val = [...items.oldVal, count++];
        }}
       
      >
        add item
      </button>

      {() => {
        const parent = document.createDocumentFragment();

        items.val.forEach((item) => {
          const element = van.tags.div(item);
          parent?.append(element);
        });

        return parent;
      }}
    </div>
  );
};

export default Todo;

const userComponent = (item: { id: string; name: string }) => {
  return van.tags.div({
    textContent: item.name,
  });
};

const items = van.state<{ id: string; name: string }[]>([]);

van.tags.div(
  (() => {
    const cache = van.state<
      Record<
        string,
        State<{ item: { id: string; name: string }; dom: Element }>
      >
    >({});

    return (parent?: Node) => {
      parent?.childNodes.forEach((child) => child.remove());

      items.val.forEach((item) => {
        let element = cache.val[item.id].val.dom;
        if (cache.val[item.id] == null) {
          element = userComponent(item);
        }
        cache.val[item.id].val = { item, dom: element };
        van.add(parent, element);
      });

      return parent;
    };
  })(),
);

const map = <T,>(
  items: State<T[]>,
  userComponent: (value: T) => Element,
  getKey: (value: T) => string,
) => {
  const cache = van.state<Record<string, State<{ item: T; dom: Element }>>>({});
  return (parent?: Node) => {
    parent?.childNodes.forEach((child) => child.remove());

    items.val.forEach((item) => {
      let element = cache.val[getKey(item)].val.dom;
      if (cache.val[getKey(item)] == null) {
        element = userComponent(item);
      }
      cache.val[getKey(item)].val = { item, dom: element };
      van.add(parent, element);
    });

    return parent;
  };
};

van.tags.div(map(items, userComponent, (v) => v.id));
