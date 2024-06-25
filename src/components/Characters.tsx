import React, { useEffect, useState } from 'react';

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<string[]>([]);

    useEffect(() => {
        const storedCharacters = JSON.parse(localStorage.getItem('characters') || '[]');
        setCharacters(storedCharacters);
    }, []);

    return (
        <div>
            <h2>Personajes:</h2>
            {characters.length > 0 ? (
                characters.map((character, index) => (
                    <p key={index}>{character}</p>
                ))
            ) : (
                <p>No characters found.</p>
            )}
        </div>
    );
};

export default Characters;
