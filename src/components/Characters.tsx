import React, { useEffect, useState } from 'react';

const fetchData = async () => {
    const response = await fetch('https://api-seguim-ocular.vercel.app/api/data');
    const data = await response.json();
    return data;
};

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<{ name: string; surname: string; }[]>([]);

    useEffect(() => {
        fetchData().then(data => setCharacters(data));
    }, []);

    return (
        <div>
            <h2>Datos Guardados:</h2>
            {characters.length > 0 ? (
                characters.map((character, index) => (
                    <p key={index}>{`Nombre: ${character.name}, Apellido: ${character.surname}`}</p>
                ))
            ) : (
                    <p>No hay datos guardados.</p>
                )}
        </div>
    );
};

export default Characters;
