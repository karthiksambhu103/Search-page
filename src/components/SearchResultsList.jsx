import React from "react";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, input, setSelectedUser }) => {
  return (
    <div className="results-list">
      {/* Only show "No results" if the input is not empty and no results are found */}
      {input && results.length === 0 ? (
        <div className="no-results">
          <p>No results found</p>
        </div>
      ) : (
        results.map((result, id) => {
          return <SearchResult result={result} key={id} setSelectedUser={setSelectedUser} />;
        })
      )}
    </div>
  );
};
