import React from "react";
import "../styles/CollectionSort.css";

const CollectionButton = () => {
  return (
    <div style={{ width: "95%", margin: "3em auto 5em" }}>
      <div className="btn-container">
        <button className="btn1">SHOW 36 MORE</button>
        <button className="btn2">SHOW ALL(2,108)</button>
      </div>
    </div>
  );
};

export default CollectionButton;
