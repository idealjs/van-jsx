import { lazy } from "@idealjs/van-jsx";
import van from "vanjs-core";

import Counter from "./Counter";
import TestLevelAA from "./TestLevelAA";
import TestLevelAB from "./TestLevelAB";

const TestLevelA = () => {
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
        name={"TestLevelA"}
      />
      <div style={{ display: "flex" }}>
        <TestLevelAA />
        <TestLevelAB />
      </div>
    </div>
  );
};

export default TestLevelA;
