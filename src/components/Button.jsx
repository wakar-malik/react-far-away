import React from "react";

function Button({ className, children, onClick, type }) {
  return (
    <button
      className={className || ""}
      onClick={onClick || (() => {})}
      type={type || "text"}
    >
      {children}
    </button>
  );
}

export default Button;
