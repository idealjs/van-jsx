import { State } from "vanjs-core";

interface IProps {
  decrease: () => void;
  increase: () => void;
  count: State<number>;
  name: string;
}

const Counter = (props: IProps) => {
  const { decrease, increase, count, name } = props;
  console.log("refresh counter", name);
  return (
    <div style={{ display: "flex" }}>
      <button onClick={decrease}>-</button>
      <div>
        {name}:{count}
      </div>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
