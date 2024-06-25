import { h } from 'preact';
import { useState } from 'preact/hooks';

const FetchData = () => {
  const [data, setData] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch('/api/getData');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data fetched</p>}
    </div>
  );
};

export default FetchData;
