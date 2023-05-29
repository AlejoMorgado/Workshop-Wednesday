import React, { useState } from 'react';

const Cart = () => {
  const [item, setItem] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const inputHandler = event => {
    setItem(event.target.value);
  };

  const addItem = () => {
    if (item !== "") {
      setItemsList(prevItems => [...prevItems, item]);
      setItem("")
    }
  };

  return (
    <div>
      <label>Add item</label>
      <input value={item} onChange={inputHandler} />
      <button onClick={addItem}>Add item</button>
      {itemsList.length === 0 && <p>You must type what you want to add</p>}
      <ul>
      {itemsList.map( item => (<li>{item}</li>))}
    </ul>
    </div>
  );
};

export default Cart;
