const { v4: uuidv4 } = require('uuid');

const dataStore = new Map();

async function handlePost(request) {
    const body = await request.json();
    const id = uuidv4();
    dataStore.set(id, body.sum);

    return new Response(JSON.stringify({ id: id }), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Permitir cualquier origen
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}

async function handleOptions() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*', // Permitir cualquier origen
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}

export async function post({ request }) {
    if (request.method === 'OPTIONS') {
        return handleOptions();
    }
    return handlePost(request);
}

export function getStore() {
    return dataStore;
}
