import React from 'react';
import  InputDecimal  from "../InputDecimal/InputDecimal";

// import images here and spa rating show in card and put input insisde

export default function Card({ pokemonNum }) {
    return (
        <div id={pokemonNum} className="pokemon-card">
            <img alt={pokemonNum} src={`${process.env.PUBLIC_URL}/pokemon${pokemonNum}.${pokemonNum === 4 ? 'png' : 'jpg'}`} />
            <p className="spa">{`SPA #${pokemonNum === 3 ? '9' : '10'}`}</p>
            <InputDecimal type="text" placeholder="Guess the price" />
        </div>
    )
}
