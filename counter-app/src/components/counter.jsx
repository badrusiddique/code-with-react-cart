import React, { useState } from "react";

function Counter({ id, value, onClick, onDelete }) {
  //const [count, setCount] = useState(0);
  // const [tags, setTags] = useState(["1", "2", "3"]);

  const formatCount = () => {
    return value === 0 ? "Zero" : value;
  };

  const styleCount = () => {
    return value === 0
      ? "badge text-bg-warning m-1"
      : "badge text-bg-primary m-1";
  };

  const handleClick = () => {
    onClick({ id, value });
  };

  const handleDelete = () => {
    onDelete({ id });
  };

  return (
    <div>
      <span className={styleCount()}>{formatCount()}</span>
      <button onClick={handleClick} className="btn btn-secondary btn-sm m-2">
        +
      </button>
      <button onClick={handleDelete} className="btn btn-danger btn-sm m-2">
        -
      </button>
      {/* <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Counter;
