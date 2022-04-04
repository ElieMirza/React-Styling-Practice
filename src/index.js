import React from "react";
import ReactDOM from "react-dom";

const time = new Date().getHours();

let timeOfDay = "day";
let customStyle = { color: "" };

if (time >= 0 && time < 12) {
  timeOfDay = "morning";
  customStyle.color = "red";
} else if (time >= 12 && time <= 18) {
  timeOfDay = "afternoon";
  customStyle.color = "green";
} else {
  timeOfDay = "evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={customStyle}>Good {timeOfDay}</h1>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
