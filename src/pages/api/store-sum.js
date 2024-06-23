export async function post({ request }) {
    const { sum } = await request.json();
    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', '*'); // Permitir todos los orígenes. Puedes restringirlo a un origen específico si prefieres.
    headers.set('Content-Type', 'application/json');
    return new Response(JSON.stringify({ sum }), { status: 200, headers });
  }
  
  export async function options() {
    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', '*'); // Permitir todos los orígenes. Puedes restringirlo a un origen específico si prefieres.
    headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return new Response(null, { status: 204, headers });
  }
  