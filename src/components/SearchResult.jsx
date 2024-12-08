import React from "react";
import "./SearchResult.css";

export const SearchResult = ({ result, setSelectedUser }) => {
  const handleClick = () => {
    setSelectedUser(result); // Set the full user data to show details
  };

  return (
    <div className="search-result" onClick={handleClick}>
      <h2>{result.name}</h2>
    </div>
  );
};
