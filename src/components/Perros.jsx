import React from 'react';

const Perros = () => {
  const dogs = [
    { name: 'Labrador Retriever', description: 'Amistoso, activo y extrovertido.' },
    { name: 'Bulldog', description: 'Gentil, amistoso y valiente.' },
    { name: 'Beagle', description: 'Curioso, amigable y alegre.' },
    { name: 'Poodle', description: 'Inteligente, activo y alerta.' },
    { name: 'Chihuahua', description: 'Valiente, alerta y vivaz.' }
  ];

  return (
    <div className="dogs-container">
      <h2>Razas de Perros</h2>
      <ul>
        {dogs.map((dog, index) => (
          <li key={index}>
            <h3>{dog.name}</h3>
            <p>{dog.description}</p>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .dogs-container {
          margin-top: 20px;
          padding: 20px;
          background-color: #f0f8ff;
          border-radius: 8px;
        }
        h2 {
          color: #333;
        }
        ul {
          padding-left: 20px;
        }
        li {
          margin-bottom: 15px;
        }
        li h3 {
          margin: 0;
          color: #555;
        }
        li p {
          margin: 5px 0 0 0;
          color: #777;
        }
      `}</style>
    </div>
  );
};

export default Perros;
