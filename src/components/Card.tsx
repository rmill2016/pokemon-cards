import React, { useState, useEffect, Suspense } from 'react'
import { Pokemon, PokemonClient } from 'pokenode-ts'

type Props = {
  pokemonID: number
}

const Card = ({ pokemonID }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon>()

  useEffect(() => {
    const PokemonFetch = async () => {
      const api = new PokemonClient()

      const data = await api.getPokemonById(pokemonID)

      setPokemon(data)
    }

    PokemonFetch()
  }, [])

  function Loading() {
    return (
      <div className="w-10 h-10 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></div>
    )
  }

  if (!pokemon) {
    return <Loading />
  } else
    return (
      <div className="w-full max-w-md h-auto aspect-[3/5] rounded-lg bg-gradient-to-b from-yellow-300 to-blue-700 flex flex-col border-2 border-yellow-500 p-4 self-center">
        <div className="flex justify-center items-center gap-4">
          <h2 className="text-3xl md:text-4xl text-black text-center capitalize font-medium">
            {pokemon && pokemon.name}
          </h2>
          <h2 className="text-3xl md:text-4xl text-black text-center capitalize font-medium">
            ID # {pokemon && pokemonID}
          </h2>
        </div>
        <img
          src={pokemon && (pokemon.sprites.front_default as string)}
          alt={pokemon && pokemon.name}
          className="w-full h-auto bg-transparent flex-grow"
        />
        <h2 className="text-3xl md:text-4xl text-black self-start p-4">
          Pokemon Moves:
        </h2>
        <ul className="flex flex-col gap-2 items-start justify-center p-4">
          {pokemon &&
            pokemon.moves.slice(0, 4).map((move, index) => (
              <li
                id={`move ${index}`}
                className="text-black text-sm md:text-base"
              >
                {move.move.name}
              </li>
            ))}
        </ul>
      </div>
    )
}

export default Card
