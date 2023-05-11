import React from "react";
import "./index.css";

declare type HexColor = `#${string}`;

const Loader = ({ color }: { color: HexColor }) => {
  return (
    <div className="loader">
      <div className="lds-ring" color={color}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
