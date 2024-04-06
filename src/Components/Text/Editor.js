import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextEditor = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const { speak } = useSpeechSynthesis();
  let typingTimer;

  // Function to handle input change
  const handleChange = (event, { newValue }) => {
    setValue(newValue);
    clearTimeout(typingTimer); // Clear previous typing timer

    // Set a new typing timer only if the last character entered is a space
    if (newValue.endsWith(" ")) {
      typingTimer = setTimeout(speakWord, 1000);
    }
  };

  // Function to speak out the current value
  const speakWord = () => {
    speak({ text: value.trim() }); // Speak out the trimmed value
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
  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion}
    </div>
  );

  // Autosuggest configuration
  const autosuggestProps = {
    suggestions: suggestions,
    onSuggestionsFetchRequested: ({ value }) => fetchSuggestions(value),
    onSuggestionsClearRequested: () => setSuggestions([]),
    getSuggestionValue: (suggestion) => suggestion,
    renderSuggestion: renderSuggestion,
  };

  useEffect(() => {
    // Clear the typing timer when component unmounts
    return () => {
      clearTimeout(typingTimer);
    };
  }, []);

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

export default TextEditor;
