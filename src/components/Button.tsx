import React, { MouseEventHandler } from "react";
import "../css/components/button.css";

const Button = (props: {
  onClickEvent?: () => void;
  children: JSX.Element;
  extraClasses?: string;
}) => {
  return (
    <button
      onClick={props.onClickEvent}
      className={`${props.extraClasses || ``} button`}
    >
      {props.children}
    </button>
  );
};

export default Button;
