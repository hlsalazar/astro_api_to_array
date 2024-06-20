// src/components/Posiciones.jsx
import React from 'react';

const Posiciones = ({ items }) => {
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
