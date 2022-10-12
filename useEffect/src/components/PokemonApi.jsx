import { useEffect, useState } from "react";

export function PokemonApi() {
    const [pokemons, setPokemon] = useState([]);

    const fetchPokemon = async () => {
      await fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      });
    }

    useEffect(() => {
      fetchPokemon()
    }, []);

    return (
        <>
            <ul>
                {pokemons.map((pokemon, key) => (
                    <li key={key}>
                        {pokemon.name}
                    </li>
                ))}
            </ul>
        </>
    );
}