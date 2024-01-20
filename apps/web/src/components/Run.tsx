import van, { State } from "vanjs-core";

interface IProps {
  ref: State<{
    start: () => Promise<void>;
  }>;
  sleepMs: number;
}
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Run = (props: IProps) => {
  const { ref, sleepMs } = props;
  const headingSpaces = van.state(40);
  const trailingUnderscores = van.state(0);

  ref.val = {
    start: async () => {
      while (headingSpaces.val > 0) {
        await sleep(sleepMs);
        --headingSpaces.val;
        ++trailingUnderscores.val;
      }
    },
  };

  return (
    <pre>
      {() => {
        return `${" ".repeat(headingSpaces.val)}🚐💨Hello VanJS!${"_".repeat(
          trailingUnderscores.val
        )}`;
      }}
    </pre>
  );
};

export default Run;
