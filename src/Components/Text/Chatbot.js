import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';


const Chatbot = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  let typingTimer;

  // Function to handle input change
  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
    clearTimeout(typingTimer); // Clear previous typing timer

    // Set a new typing timer to fetch suggestions after a delay
    typingTimer = setTimeout(() => {
      fetchSuggestions(value);
    }, 500);
  };

  // Function to fetch autocomplete suggestions
  const fetchSuggestions = async (inputValue) => {
    // Make API call or fetch suggestions based on inputValue
    // Example API call:
    const response = await fetch(`/api/suggestions?input=${inputValue}`);
    const data = await response.json();
    setSuggestions(data.suggestions);
  };

  // Function to render suggestions
  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  // Autosuggest configuration
  const autosuggestProps = {
    suggestions: suggestions,
    onSuggestionsFetchRequested: () => {}, // Suggestions are fetched on input change
    onSuggestionsClearRequested: () => setSuggestions([]),
    getSuggestionValue: (suggestion) => suggestion,
    renderSuggestion: renderSuggestion,
  };

  return (
    <Autosuggest
      {...autosuggestProps}
      inputProps={{
        value: value,
        onChange: handleChange,
      }}
    />
  );
};

export default Chatbot;
