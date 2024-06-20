// src/components/Posiciones.jsx
import React from 'react';

// Definir la interfaz de propiedades
const Posiciones = ({ items }) => {
  console.log("Received items in Posiciones:", items); // Añadir mensaje de consola para verificar los datos

  return (
    <div>
      <h2>Gaze Events</h2>
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
    </div>
  );
};

export default Posiciones;
