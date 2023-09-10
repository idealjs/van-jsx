import { lazy } from "@idealjs/van-jsx";
import van from "vanjs-core";

import Counter from "./Counter";

const TestLevelAB = () => {
  const countState = van.state(0);
  const increase = () => {
    countState.val++;
  };

  const decrease = () => {
    countState.val--;
  };

  return (
    <div>
      <Counter
        count={lazy(() => countState.val)}
        increase={increase}
        decrease={decrease}
        name={"TestLevelAB"}
      />
      <div style={{ display: "flex" }}></div>
    </div>
  );
};

export default TestLevelAB;
