// src/components/Posiciones.jsx
import React, { useState, useEffect } from 'react';

const Posiciones = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Function to parse the query parameter
    function getArrayFromQuery() {
      const params = new URLSearchParams(window.location.search);
      const data = params.get('gazeevents');
      return data ? JSON.parse(decodeURIComponent(data)) : [];
    }

    const arrayFromQuery = getArrayFromQuery();
    setItems(arrayFromQuery);
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

export default Posiciones;
