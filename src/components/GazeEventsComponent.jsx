import React, { useEffect, useState } from 'react';

const decodeGazeevents = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const gazeevents = urlParams.get('gazeevents');
  if (gazeevents) {
    try {
      const decodedData = JSON.parse(decodeURIComponent(gazeevents));
      return decodedData;
    } catch (error) {
      console.error('Error decoding gazeevents:', error);
      return null;
    }
  }
  return null;
};

const GazeeventsComponent = () => {
  const [gazeevents, setGazeevents] = useState(null);

  useEffect(() => {
    const data = decodeGazeevents();
    setGazeevents(data);
  }, []);

  if (!gazeevents) {
    return <div>No gazeevents data found.</div>;
  }

  return (
    <div>
      <h1>Gazeevents Data</h1>
      <pre>{JSON.stringify(gazeevents, null, 2)}</pre>
    </div>
  );
};

export default GazeeventsComponent;
