import React from "react";
import "../styles/SuggestionBox.css";

function SuggestionBox({ suggestion, selected }) {
  return (
    <div className={`suggestionBox ${selected && "suggestionBox--active"}`}>
      <p>{suggestion}</p>
    </div>
  );
}

export default SuggestionBox;
