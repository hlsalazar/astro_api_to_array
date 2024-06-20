export async function post({ request }) {
    const { gazeevents } = await request.json();
  
    // Aquí puedes procesar los gazeEvents, por ejemplo, guardarlos en una base de datos o realizar análisis.
    console.log(gazeevents);
  
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  