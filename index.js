import React, { useState } from "react";

// 2) You need to figure out which properties are
// causing this component to re-render and why.
// 3) Could you implement a generic function
// that can do such detections?
const Counter = ({ value, increase }) => {
  return (
    <div>
      <span>{value}</span> <button onClick={increase}>+1</button>
    </div>
  );
};

// 1) The following code is not optimal in terms
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
