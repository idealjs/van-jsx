import { createState } from "@idealjs/van-jsx";
import van from "vanjs-core";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Run = ({ sleepMs }: { sleepMs: number }) => {
  const headingSpaces = van.state(40),
    trailingUnderscores = van.state(0);

  const animate = async () => {
    while (headingSpaces.val > 0) {
      await sleep(sleepMs);
      --headingSpaces.val;
      ++trailingUnderscores.val;
    }
  };
  animate();

  return van.tags.pre(
    () =>
      `${" ".repeat(headingSpaces.val)}🚐💨Hello VanJS!${"_".repeat(
        trailingUnderscores.val
      )}`
  );
};

interface IProps {
  name: string;
}

const RacingGame = (props: IProps) => {
  const ref = createState<HTMLDivElement>(null);

  return (
    <div>
      <button
        onclick={() => {
          van.add(ref.val, Run({ sleepMs: 2000 }));
        }}
      >
        Hello 🐌
      </button>
      <button
        onclick={() => {
          van.add(ref.val, Run({ sleepMs: 500 }));
        }}
      >
        Hello 🐢
      </button>
      <button
        style={{}}
        onclick={() => {
          van.add(ref.val, Run({ sleepMs: 100 }));
        }}
      >
        Hello 🚶‍♂️
      </button>
      <button
        onclick={() => {
          van.add(ref.val, Run({ sleepMs: 10 }));
        }}
      >
        Hello 🏎️
      </button>
      <button
        onclick={() => {
          van.add(ref.val, Run({ sleepMs: 2 }));
        }}
      >
        Hello 🚀
      </button>

      <div ref={ref} className="hello"></div>
    </div>
  );
};

export default RacingGame;
