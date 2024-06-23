import React, { useEffect, useState } from 'react';

const DataFetcher = ({ id }) => {
  const [largeArray, setLargeArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://https://astro-api-to-array.vercel.app/api/get-data?id=${id}`);
      const data = await response.json();
      setLargeArray(data.largeArray);
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div>
      <h1>Datos recibidos</h1>
      <ul>
        {largeArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
