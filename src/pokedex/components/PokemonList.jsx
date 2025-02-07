import React from 'react'
import PokemonCard from './PokemonCard'
import  '../styles/PokemonList.scss'
function PokemonList({pokemons}) {
   
  return (

  
    <div className='pokelist'>
   {pokemons.map(pokemon =>

       
        <PokemonCard key={pokemon.name} 
        pokemon ={pokemon.url}> 
        </PokemonCard>
       
    
   
   )}
   
   </div>
    
  )
}

export default PokemonList