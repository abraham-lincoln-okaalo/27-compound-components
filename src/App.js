import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}

      <Counter>
        <Counter.Label>A Flexible Counter Component</Counter.Label>
        <Counter.Increase icon="+" />
        <Counter.Count />
        <Counter.Decrease icon="-" />
      </Counter>

      <div>
        <Counter>
          <Counter.Increase icon="➕" />
          <Counter.Count />
          <Counter.Decrease icon="➖" />
        </Counter>
      </div>
    </div>
  );
}
