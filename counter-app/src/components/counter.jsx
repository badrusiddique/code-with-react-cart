import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  const [tags, setTags] = useState(["1", "2", "3"]);

  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };

  const styleCount = () => {
    return count === 0
      ? "badge text-bg-warning m-1"
      : "badge text-bg-primary m-1";
  };

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log("button click", count);
  };

  return (
    <div>
      <span className={styleCount()}>{formatCount()}</span>
      <button onClick={handleClick} className="btn btn-secondary btn-sm m-2">
        Click Me
      </button>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
