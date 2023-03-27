import React from 'react'
import { Link } from 'react-router-dom'

const PokemonList = ({ pokemonList }) => {
  return (
    <div>
      <h1 style={{ marginLeft: '15px' }}>Pokedex - gotta catch em all</h1>
      <div className="list-container">
        {pokemonList.map(({ id, name }) => (
          <Link key={id} to={`/pokemon/${name}`} className="list-item" style={{ backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})` }}>
            <div
              className="list-item-name"
            >
              {name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PokemonList
