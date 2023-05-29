import React, { useState } from 'react';

const Opener = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div>
    <h2>Open && close</h2>
      <button onClick={handleToggleModal}>{isOpen ? 'Close Modal' : 'Open Modal'}</button>
      {isOpen && (
        <div className="modal">
            <p>Hello there</p>
        </div>
      )}
    </div>
  );
};

export default Opener;
