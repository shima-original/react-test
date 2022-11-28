import React, { useEffect, useState } from "react";

const useRenderInspector = (newProps) => {
  const [memoizedProps, setMemoizedProps] = useState(newProps);

  useEffect(
    () => {
      if (newProps !== memoizedProps) {
        const updatedPropsKeys = Object.keys();

        console.log(
          `Rerendered due to prop values update: ${Object.keys(newProps)
            .toString()
            .replace(",", ", ")}`
        );

        setMemoizedProps(newProps);
      }
    },

    Object.values(newProps)
  );
};

// 1) You need to figure out which properties are
// causing this component to re-render and why.
// 2) Could you implement a generic function
// that can do such detections?
const Counter = (props) => {
  const { value, increase } = props;

  useRenderInspector(props);

  return (
    <div>
      <span>{value}</span> <button onClick={increase}>+1</button>
    </div>
  );
};

// 3) The following code is not optimal in terms
// of performance. Could you improve it?
const Page = () => {
  const [value, setValue] = useState(0);

  return (
    <Counter
      value={value}
      //  increase={() => setValue(value + 1)}
      increase={() => setValue((v) => v + 1)}
      //Так Counter вернет точное значение, если вызывать его быстро и много раз подряд
    />
  );
};

export default Page;
