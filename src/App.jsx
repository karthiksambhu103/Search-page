import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";
import { UserDetail } from "./components/UserDetail";

import "./App.css";
const App = () => {
  const [results, setResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // State to store selected user's full data
  const [input, setInput] = useState("");


  return (
    <div className="app-container">
      
      <div>
      <h2 style={{textAlign:"center"}}>Search names</h2>
      <SearchBar setResults={setResults} setInput={setInput} />
      {!selectedUser ? (
        <SearchResultsList results={results} input={input} setSelectedUser={setSelectedUser} />
      ) : (
        <UserDetail user={selectedUser} setSelectedUser={setSelectedUser} />
      )}
      </div>
    </div>
  );
};

export default App;