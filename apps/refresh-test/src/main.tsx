import van from "vanjs-core";

import TestLevelA from "./example1/TestLevelA";
import Test from "./example2/Test";
import Todo from "./example3/Todo";

const items = van.state<number[]>([1, 2, 3]);
let count = 3;

const fragment = van.derive(() => {
  console.log("test test", items.val);
  const parent = document.createDocumentFragment();

  items.val.forEach((item) => {
    const element = van.tags.div(item);
    parent?.append(element);
  });

  return parent;
});

van.add(
  document.getElementById("app")!,
  van.tags.button(
    {
      onclick: () => {
        items.val = [...items.oldVal, count++];
      },
    },
    "add item",
    () => items.val.length,
  ),
  () => fragment.val,
);
