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
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>X Coordinate</th>
          <th>Y Coordinate</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{item.docX}</td>
            <td>{item.docY}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GazeEvents;
