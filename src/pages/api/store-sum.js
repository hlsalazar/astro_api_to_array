import { v4 as uuidv4 } from 'uuid';

const dataStore = new Map();

export async function post({ request }) {
    const body = await request.json();
    const id = uuidv4();
    dataStore.set(id, body.sum);

    return new Response(JSON.stringify({ id: id }), {
        headers: { 'Content-Type': 'application/json' }
    });
}

export function getStore() {
    return dataStore;
}
