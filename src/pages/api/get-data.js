export default (req, res) => {
    if (req.method === 'GET') {
        const { id } = req.query;
        const data = dataStore[id];
        if (data) {
            res.status(200).json({ largeArray: data });
        } else {
            res.status(404).json({ message: 'Data Not Found' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};
