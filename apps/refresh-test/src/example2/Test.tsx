import { lazy } from "@idealjs/van-jsx";
import van from "vanjs-core";

import Counter from "./Counter";

const Test = () => {
  const countState = van.state({ total: 0 });
  const increase = () => {
    countState.val.total++;
  };

  const decrease = () => {
    countState.val.total--;
  };

  return (
    <div>
      <Counter
        count={lazy(() => countState.val.total)}
        increase={increase}
        decrease={decrease}
        name={"Test Object in State"}
      />
    </div>
  );
};

export default Test;
