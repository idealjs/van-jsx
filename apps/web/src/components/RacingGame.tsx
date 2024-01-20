import { createState } from "@idealjs/van-jsx";

import Run from "./Run";

interface IProps {
  name: string;
}

const RacingGame = (props: IProps) => {
  const ref1 = createState<{
    start: () => Promise<void>;
  }>(null);
  const ref2 = createState<{
    start: () => Promise<void>;
  }>(null);
  const ref3 = createState<{
    start: () => Promise<void>;
  }>(null);
  const ref4 = createState<{
    start: () => Promise<void>;
  }>(null);
  const ref5 = createState<{
    start: () => Promise<void>;
  }>(null);

  return (
    <div>
      <button
        onClick={() => {
          ref1.val.start();
        }}
      >
        Start 🐌
      </button>
      <button
        onClick={() => {
          ref2.val.start();
        }}
      >
        Start 🐢
      </button>

      <button
        style={{}}
        onClick={() => {
          ref3.val.start();
        }}
      >
        Start 🚶‍♂️
      </button>

      <button
        onClick={() => {
          ref4.val.start();
        }}
      >
        Start 🏎️
      </button>
      <button
        onClick={() => {
          ref5.val.start();
        }}
      >
        Start 🚀
      </button>
      <Run ref={ref1} sleepMs={2000} />
      <Run ref={ref2} sleepMs={500} />
      <Run ref={ref3} sleepMs={100} />
      <Run ref={ref4} sleepMs={10} />
      <Run ref={ref5} sleepMs={2} />
    </div>
  );
};

export default RacingGame;
