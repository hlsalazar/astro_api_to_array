import { useEffect, useState } from 'react';

const GazeEventsComponent = () => {
  const [gazeEvents, setGazeEvents] = useState([]);

  useEffect(() => {
    // Este código solo se ejecutará en el cliente
    if (typeof window !== 'undefined') {
      // Obtener los parámetros de la URL
      const queryParams = new URLSearchParams(window.location.search);
      const gazeevents = queryParams.get('gazeevents');

      if (gazeevents) {
        alert('Datos recibidos en el componente');

        // Decodificar y analizar el JSON
        const decodedData = decodeURIComponent(gazeevents);
        const parsedData = JSON.parse(decodedData);

        // Mostrar el contenido del array
        alert(`Contenido del array: ${JSON.stringify(parsedData)}`);

        // Establecer los datos en el estado
        setGazeEvents(parsedData);
      }
    }
  }, []);

  const showAlert = () => {
    alert(`Contenido del array: ${JSON.stringify(gazeEvents)}`);
  };

  return (
    <div>
      <h1>Gaze Events</h1>
      {gazeEvents.length > 0 ? (
        <ul>
          {gazeEvents.map((event, index) => (
            <li key={index}>
              {JSON.stringify(event)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
      <button onClick={showAlert}>Mostrar contenido del array</button>
    </div>
  );
};

export default GazeEventsComponent;
