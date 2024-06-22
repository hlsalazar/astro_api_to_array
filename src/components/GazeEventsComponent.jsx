import { useState, useEffect } from 'react';

const GazeeventsComponents = () => {

const [resultado, setResultado] = useState(null);

useEffect(() => {
    async function obtenerResultado() {
        const response = await fetch('/api/obtener-resultado');
        const data = await response.json();
        setResultado(data.resultado);
    }
    obtenerResultado();
}, []);

<div>
    <h1>Resultado de la Suma</h1>
    <p>{resultado !== null ? `El resultado es: ${resultado}` : 'Esperando resultado...'}</p>
</div>
};

export default GazeeventsComponents;

