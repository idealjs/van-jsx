import { lazy } from "@idealjs/van-jsx";
import van from "vanjs-core";

const Todo = () => {
  const items = van.state<number[]>([]);
  let count = 0;
  return (
    <div>
      <button
        onclick={() => {
          items.val = [...items.oldVal, count++];
        }}
      >
        add item
      </button>

      <h1>1.1</h1>
      {/* 1.1 */}
      {lazy(() => {
        return van.tags.div(
          items.val.map((value) => {
            return van.tags.div({
              textContent: value,
            });
          })
        );
      })}

      <h1>1.2</h1>
      {/* 1.2 */}
      {lazy(() => {
        return (
          <div>
            {items.val.map((value) => {
              return <div>{value}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
