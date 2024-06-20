// src/components/GazeEvents.jsx
import React, { useState, useEffect } from 'react';

const GazeEvents = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Function to get the data from localStorage
    function getArrayFromLocalStorage() {
      const data = localStorage.getItem('gazeevents');
      return data ? JSON.parse(data) : [];
    }

    const arrayFromLocalStorage = getArrayFromLocalStorage();
    setItems(arrayFromLocalStorage);
  }, []);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{JSON.stringify(item)}</li>
      ))}
    </ul>
  );
};

export default GazeEvents;
