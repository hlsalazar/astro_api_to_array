import { v4 as uuidv4 } from 'uuid';

const dataStore = new Map();

export async function post({ request }) {
    const body = await request.json();
    const id = uuidv4();
    dataStore.set(id, body.sum);

    return new Response(JSON.stringify({ id: id }), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://api-seguim-ocular.vercel.app' // Permitir solo solicitudes desde este origen
        }
    });
}

export function getStore() {
    return dataStore;
}

export async function options() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': 'https://api-seguim-ocular.vercel.app', // Permitir solo solicitudes desde este origen
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}
