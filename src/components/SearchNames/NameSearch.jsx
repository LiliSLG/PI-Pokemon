import React, { useState } from "react";
import style from "./NameSearch.module.css"

const NameSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedNames, setSelectedNames] = useState([]);

  const names = ["Alice", "Bob", "Charlie", "Dave", "Eve"]; // Replace with your list of names

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleLetterClick = (letter) => {
    const filteredNames = names.filter((name) =>
      name.toLowerCase().startsWith(letter.toLowerCase())
    );
    setSelectedNames(filteredNames);
  };

  const handleNameSelect = (name) => {
    if (selectedNames.includes(name)) {
      setSelectedNames(selectedNames.filter((n) => n !== name));
    } else {
      setSelectedNames([...selectedNames, name]);
    }
  };

  const handleSearch = () => {
    // Perform search with selected names
    // You can use the 'selectedNames' array for your search logic
    console.log(selectedNames);
  };

  const handleCancel = () => {
    // Clear selected names and search text
    setSelectedNames([]);
    setSearchText("");
  };

  return (
    <div>
      <p>Select the names to search</p>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <div>
        {Array.from(Array(26)).map((_, index) => (
          <button
            key={index}
            onClick={() => handleLetterClick(String.fromCharCode(65 + index))}
          >
            {String.fromCharCode(65 + index)}
          </button>
        ))}
      </div>
      <div>
        {selectedNames.map((name) => (
          <div key={name}>
            <input
              type="checkbox"
              checked={selectedNames.includes(name)}
              onChange={() => handleNameSelect(name)}
            />
            {name}
          </div>
        ))}
      </div>
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default NameSearch;