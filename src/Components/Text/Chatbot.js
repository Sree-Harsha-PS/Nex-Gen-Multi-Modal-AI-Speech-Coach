import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import './Chatbot.css';

const Chatbot = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  let typingTimer;

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleButtonClick = () => {
    fetchSuggestions(value);
  };

  const fetchSuggestions = async (inputValue) => {
    const response = await fetch(`/api/suggestions?input=${inputValue}`);
    const data = await response.json();
    setSuggestions(data.suggestions);
  };

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  const autosuggestProps = {
    suggestions: suggestions,
    onSuggestionsFetchRequested: () => {}, // Suggestions are fetched on input change
    onSuggestionsClearRequested: () => setSuggestions([]),
    getSuggestionValue: (suggestion) => suggestion,
    renderSuggestion: renderSuggestion,
  };

  return (
    <div className="chatbot-container">
      <div className="textarea-container">
        <textarea
          className="textarea"
          value={value}
          onChange={handleChange}
          placeholder="Type your message here..."
        />
      </div>
      <div className="button-container">
        <button className="button" onClick={handleButtonClick}>
          Send
        </button>
      </div>
      {/* Autosuggest component can be added here */}
    </div>
  );
};

export default Chatbot;
