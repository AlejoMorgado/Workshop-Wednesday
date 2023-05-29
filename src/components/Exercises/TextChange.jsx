import React, { useState } from 'react';

const TextChange = () => {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setCharCount(newText.length);
  };

  return (
    <div>
    <h2>Comment area</h2>
      <textarea value={text} onChange={handleTextChange} />
      <p>Character Count: {charCount}</p>
    </div>
  );
};

export default TextChange;
