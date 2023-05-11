import React from "react";
import "./index.css";

declare type HexColor = `#${string}`;

const Loader = ({ color = "#03A9F4" }: { color: HexColor }) => {
  return (
    <div className="loader">
      <div className="lds-ring">
        <div style={{ borderColor: `${color} transparent` }}></div>
        <div style={{ borderColor: `${color} transparent` }}></div>
      </div>
    </div>
  );
};

export default Loader;
