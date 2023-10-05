import React from "react";

function Select({ arr = [], value, className, onChange }) {
  return (
    <select
      name="select"
      id="select"
      className={className || ""}
      onChange={onChange || (() => {})}
      value={value}
    >
      {arr.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default Select;
