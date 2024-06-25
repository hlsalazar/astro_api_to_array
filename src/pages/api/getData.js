export async function get(context) {
    const apiUrl = 'https://api-seguim-ocular.vercel.app/api/getData';
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return {
        body: JSON.stringify(data),
      };
    } catch (error) {
      return {
        status: 500,
        body: JSON.stringify({ error: 'Failed to fetch data' }),
      };
    }
  }
  