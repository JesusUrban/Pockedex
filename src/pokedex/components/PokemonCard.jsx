import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import '../styles/PokemonCard.scss'

function PokemonCard({pokemon}) {
    const [pokemonState,setPokemon] = useState({})

    useEffect(() =>{
        axios.get(pokemon)
        .then(({data}) => setPokemon(data)) 
    },[pokemon])

    if(!pokemonState ) return <p>Loading....</p>
  
  
    const types = pokemonState?.types?.map(t => t.type.name)
    const [hp, attack, defense, specialAttack, specialDefense, speed] = pokemonState?.stats || []
    
  
  
    return (
    <Link to={`/pokedex/${pokemonState?.name}` } className={`pokecard type--${types?.[0]}`}>
  <div className="pokecard__header">


  <img className='img' src={pokemonState?.sprites?.other['official-artwork']?.front_default} alt={pokemonState?.name} />
  </div>

  <div className='pokecard__body'>
  <h2 className='pokecard__body-name'>{pokemonState?.name}</h2>
  <h3 className='pokecard__body-types'>Types</h3>
 <p className="pokecard__body-types-label">{types?.join(' / ')}</p>
  
  <div className='pokecard__stats'>
    <div className='pokecard__stats-item'>hp <span>{hp?.base_stat}</span></div>
    <div className='pokecard__stats-item'>sttack <span>{attack?.base_stat}</span></div>
    <div className='pokecard__stats-item'>defense <span>{defense?.base_stat}</span></div>
    <div className='pokecard__stats-item'>speed <span>{speed?.base_stat}</span></div>
    
  </div>
  




  </div>
  
  


    </Link>
  )
}

export default PokemonCard