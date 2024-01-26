import React from "react";
import "../styles/SuggestionBox.css";

function SuggestionBox({ suggestion, selected, setSelected }) {
  const handleClick = () => {
    setSelected(suggestion);
  };
  return (
    <div
      onClick={handleClick}
      className={`suggestionBox ${selected && "suggestionBox--active"}`}
    >
      <p>{suggestion}</p>
    </div>
  );
}

export default SuggestionBox;
