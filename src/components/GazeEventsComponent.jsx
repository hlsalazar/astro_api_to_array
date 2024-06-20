import { useEffect, useState } from 'react';

const GazeEventsComponent = () => {
  const [gazeEvents, setGazeEvents] = useState([]);

  useEffect(() => {
    // Obtener los parámetros de la URL
    const queryParams = new URLSearchParams(window.location.search);
    const gazeevents = queryParams.get('gazeevents');

    if (gazeevents) {
      // Decodificar y analizar el JSON
      const decodedData = decodeURIComponent(gazeevents);
      const parsedData = JSON.parse(decodedData);

      // Establecer los datos en el estado
      setGazeEvents(parsedData);
    }
  }, []);

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
    </div>
  );
};

export default GazeEventsComponent;
