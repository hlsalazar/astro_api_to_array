import React, { useEffect, useState } from 'react';

const ApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api-seguim-ocular.vercel.app/api/data');
      const result = await response.json();
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiData;
