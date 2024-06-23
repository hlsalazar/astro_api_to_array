import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());

const dataStore = new Map();

app.use(cors({
  origin: '*', // Permitir cualquier origen
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.post('/api/store-sum', (req, res) => {
  const { sum } = req.body;
  const id = uuidv4();
  dataStore.set(id, sum);
  res.json({ id });
});

app.options('/api/store-sum', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*', // Permitir cualquier origen
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  }).send();
});

app.get('/api/getstore', (req, res) => {
  res.json([...dataStore]);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

export default dataStore;
