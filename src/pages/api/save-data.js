let dataStore = {};

export default (req, res) => {
    if (req.method === 'POST') {
        const { largeArray } = req.body;
        const id = Date.now().toString(); // Generar un ID único para los datos
        dataStore[id] = largeArray;
        res.status(200).json({ id });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};
