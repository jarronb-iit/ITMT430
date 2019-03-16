import React from "react";
import "./SampleComponent.css";

export default function SampleComponent(props) {
  return (
    <div className="Component">
      <h2>I'm a component</h2>
      <h3>My title is: {props.title}</h3>
      <h4>ID: {props.id}</h4>
    </div>
  );
}
