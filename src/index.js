import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
const date = new Date();
const time = date.toLocaleDateString();
const ampm = date.toLocaleTimeString();
// ------------------if else condition--------------\\
const today = new Date();
const hour = today.getHours();
let value = "";
if (hour < 5) {
  value = "Good Morning";
} else if (hour < 16) {
  value = "Good After Noon";
} else {
  value = "Good Night";
}
root.render(
  <>
    <div>
      <div
        style={{
          background: "pink",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2>{time}</h2>
        <h2>{ampm}</h2>
      </div>
      <div>
        {/* {-------------------Its Is communication To Use Good Bye ----------------} */}
        <h1
          style={{
            background: "pink",
            color: "white",
            height: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {value}
        </h1>
      </div>
    </div>
  </>
);
