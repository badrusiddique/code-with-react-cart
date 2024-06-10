import React, { Component, useState } from "react";
import Counter from "./counter";

function Counters() {
  const initCounters = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ];
  const [counters, setCounters] = useState(initCounters);

  const handleClick = ({ id, value }) => {
    const counter = counters.find((x) => x.id === id);
    counter.value = value + 1;
    setCounters([...counters]);
  };

  const handleDelete = ({ id }) => {
    const newCounters = counters.filter((x) => x.id !== id) || [];
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initCounters);
  };

  return (
    <div>
      <button className="btn btn-info btn-sm m-1" onClick={handleReset}>
        Reset
      </button>
      {counters.map(({ id, value }) => (
        <Counter
          key={id}
          id={id}
          value={value}
          onClick={handleClick}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Counters;
