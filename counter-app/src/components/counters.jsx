import React, { Component, useState } from "react";
import Counter from "./counter";

function Counters({ onChange }) {
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
    console.log({ counters });
    const total = counters.reduce((acc, obj) => acc + obj.value, 0);
    onChange(total);
  };

  const handleDelete = ({ id }) => {
    const newCounters = counters.filter((x) => x.id !== id) || [];
    setCounters(newCounters);
    const total = newCounters.reduce((acc, obj) => acc + obj.value, 0);
    onChange(total);
  };

  const handleReset = () => {
    setCounters(initCounters);
    onChange(0);
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
