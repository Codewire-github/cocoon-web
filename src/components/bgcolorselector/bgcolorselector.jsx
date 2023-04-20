import { useState } from "react";
import "./bgcolorselector.css";
const BgColorSelector = () => {
  const [bgColor, setBgColor] = useState("white");
  return (
    <div
      className="bgcolor-container"
      style={{
        backgroundColor: `${bgColor}`,
      }}
    >
      <h2
        style={
          bgColor === "rgb(82 0 255)" || bgColor === "#f18181"
            ? { color: "white" }
            : { color: "black" }
        }
      >
        Choose your accent color
      </h2>
      <section className="bgcolor-options">
        <button
          id="bgcolor-item"
          style={{ backgroundColor: "#ffdab9" }}
          onClick={() => setBgColor("#ffdab9")}
        ></button>
        <button
          id="bgcolor-item"
          style={{ backgroundColor: "#e3ff00" }}
          onClick={() => setBgColor("#e3ff00")}
        ></button>
        <button
          id="bgcolor-item"
          style={{ backgroundColor: "white" }}
          onClick={() => setBgColor("white")}
        ></button>
        <button
          id="bgcolor-item"
          style={{ backgroundColor: "rgb(82 0 255)" }}
          onClick={() => setBgColor("rgb(82 0 255")}
        ></button>
        <button
          id="bgcolor-item"
          style={{ backgroundColor: "#f18181" }}
          onClick={() => setBgColor("#f18181")}
        ></button>
      </section>
    </div>
  );
};

export default BgColorSelector;
