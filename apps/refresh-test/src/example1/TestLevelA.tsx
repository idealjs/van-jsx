import van from "vanjs-core";

import Counter from "./Counter";
import TestLevelAA from "./TestLevelAA";
import TestLevelAB from "./TestLevelAB";

const TestLevelA = () => {
  const countState = van.state(0);
  const state = van.state("");

  const increase = () => {
    countState.val++;
  };

  const decrease = () => {
    countState.val--;
  };

  return (
    <div>
      <input value={state} onChange={(e) => (state.val = e.target.value)} />
      <Counter
        count={countState}
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
