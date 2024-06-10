import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };

  return (
    <div>
      <span className="badge text-bg-primary m-2">{formatCount()}</span>
      <button className="btn btn-secondary btn-sm m-2">Click Me</button>
    </div>
  );
}

export default Counter;
