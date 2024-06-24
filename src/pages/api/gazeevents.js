export async function post({ request }) {
  try {
    const body = await request.json();
    const gazeevents = body.gazeevents;

    // Aquí puedes almacenar los datos en algún lugar o simplemente devolverlos
    return {
      body: JSON.stringify({ success: true, data: gazeevents }),
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      body: JSON.stringify({ success: false, error: error.message }),
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
}
