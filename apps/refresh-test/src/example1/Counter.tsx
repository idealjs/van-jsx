interface IProps {
  decrease: () => void;
  increase: () => void;
  count: number;
  name: string;
}

const Counter = (props: IProps) => {
  const { decrease, increase, count, name } = props;
  console.log("refresh counter", name);
  return (
    <div style={{ display: "flex" }}>
      <button onclick={decrease}>-</button>
      <div>
        {name}:{count}
      </div>
      <button onclick={increase}>+</button>
    </div>
  );
};

export default Counter;
