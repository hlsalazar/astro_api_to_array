export async function post({ request }) {
    const { sum } = await request.json();
    return new Response(JSON.stringify({ sum }), { status: 200 });
  }
  