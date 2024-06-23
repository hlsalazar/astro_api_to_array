
import { useState, useEffect } from 'react';


const DataFetcher = () => {
const params = Astro.url.searchParams;
const id = params.get('id');
const [sum, setSum] = useState(null);

useEffect(() => {
  if (id) {
    fetch(`/api/getstore`)
      .then(response => response.json())
      .then(data => {
        const result = data.find(item => item[0] === id);
        if (result) {
          setSum(result[1]);
        }
      });
  }
}, [id]);


<div>
  <h1>Sum Result: {sum !== null ? sum : 'Loading...'}</h1>
</div>
}

export default DataFetcher;