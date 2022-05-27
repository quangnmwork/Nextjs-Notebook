import React from "react";

interface ButtonProps {
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="bg-blue-400 p-3 text-lg text-white"
      onClick={props.onClick}
    >
      Click me
    </button>
  );
};

export default Button;
