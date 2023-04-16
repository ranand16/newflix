"use client";

import React from "react";

interface TextControlProps {
  type?: string;
  classNames: string | undefined;
  children: React.ReactNode;
}

const TextControl: React.FC<TextControlProps> = ({
  type = "div",
  classNames,
  children,
}) => {
  switch (type) {
    case "h1":
      return <h1 className={classNames}>{children}</h1>;
      break;
    case "h2":
      return <h2 className={classNames}>{children}</h2>;
      break;
    case "h3":
      return <h3 className={classNames}>{children}</h3>;
      break;
    case "h4":
      return <h4 className={classNames}>{children}</h4>;
      break;
    case "h5":
      return <h5 className={classNames}>{children}</h5>;
      break;
    case "h6":
      return <h6 className={classNames}>{children}</h6>;
      break;
    case "p":
      return <p className={classNames}>{children}</p>;
      break;
    default:
      return <div className={classNames}>{children}</div>;
      break;
  }
};

export default TextControl;
