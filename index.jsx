import React, { useEffect, useState } from "react";

//Add a function (custom hook) to check which props change

const useRenderInspector = (newProps) => {
  const [props, setProps] = useState(newProps);

  useEffect(
    () => {
      if (newProps !== props) {
        const updateSummary = Object.keys(newProps)
          .filter((key) => newProps[key] !== props[key])
          .toString()
          .replace(",", ", ");

        console.log(`Rerendered due to prop values update: ${updateSummary}`);

        setProps(newProps);
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
      //So Counter will return the exact value
      //if you call it quickly and many times in a row
    />
  );
};

export default Page;
