import React, { useEffect, useState } from 'react'
import { useName } from '../hooks/useName'
import axios from 'axios'
import PokemonList from './components/PokemonList'
import { Link } from 'react-router'

import './styles/Pokedex.scss'

const POKEAPI_Base = 'https://pokeapi.co/api/v2'
function Pokedex() {
  const [pokemons, setPokemons] =  useState([])
  const [filterPokemons, setFilterPokemons] = useState(pokemons)
  const [search, setSearch] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  //setSinglePokemon
  const [selectedPokemon,setselectedPokemon] = useState(null)
  const [types, setTypes] = useState([])
   const { name, clearName}= useName()


     //function to render the first 20 

     
function getInitialPokemons(){
  axios
  .get(`${POKEAPI_Base}/pokemon?limit=150`)
  .then(({data}) => {
    setPokemons(data.results)
    setFilterPokemons(data.results)
    setselectedPokemon(null)
  
  })
}

   useEffect(() =>{
    // axios
    // .get(`${POKEAPI_Base}/pokemon?limit=150`)
    // .then(({data}) => {
    //   setPokemons(data.results)
    //   setFilterPokemons(data.results)
    // })
    getInitialPokemons()
   },[])

// Cargar los tipos de pokemons
useEffect(() =>{
axios.get(`${POKEAPI_Base}/type?limit=18`)
.then(({data}) => { setTypes(data.results)})
},[])

   useEffect(() =>{
     if(!search){
      setFilterPokemons(pokemons)
      setselectedPokemon(null)
      return
     }
     setFilterPokemons(
      pokemons.filter(p =>
        p.name.toLowerCase().includes(search.toLocaleLowerCase())
      )
     )
     

  },[search, pokemons])
   
// change the type of pokemon by the selected one
useEffect(() => {
  if(selectedType === 'all'){
  getInitialPokemons()
    return
  }

  axios.get(`${POKEAPI_Base}/type/${selectedType}`)
  .then(({data}) => {
    const typePokemons = data.pokemon.map(p => p.pokemon)
    setPokemons(typePokemons)
    setFilterPokemons(typePokemons)
    setselectedPokemon(null)
  })


},[selectedType])
   


//Search a pokemon by name or Id
const searchPokemon = () =>{
if(!search){
  getInitialPokemons()
  return
}
axios.get(`${POKEAPI_Base}/pokemon/${search}`)
.then(({data}) => {
    if(selectedType !== 'all'){

      const isOfType = data.types.some(t => t.type.name === 
        selectedType)
    if(!isOfType){
      setselectedPokemon(null)
          alert('The pokemon is not of the same type you selected')
      return
    }

    }
    setselectedPokemon(data)

})
.catch(( ) => {
  alert('The POKEMON was not found')
  setselectedPokemon(null)
  setselectedPokemon(null)
})

}
  return (
    <div>
      <img src="https://composer0.github.io/Pokemon-Pokedex-API/img/pokedex-hero.png" alt="" />
  <button onClick={clearName} className='btn exit'>Sing out</button>            {name && 
       <div>
      
       <p className='Welcome__one'>Welcome {name}, here you will find your favorate Pokémon </p>

        
        </div>
       }

      
       
       <input 
       type="text"
       value = {search}
       onChange={(e)=> setSearch(e.target.value)}
       placeholder='Filter or search by ID'
       onKeyDown={(e) => e.key === 'Enter' &&  searchPokemon()}
       />
       <button className='btn' onClick={searchPokemon}>Search</button>
       <select 
          
        value={selectedType}
      onChange={(e) => setSelectedType(e.target.value)}
        >
      <option value='all'> All</option>
         {types.map(type => (

          <option key={type.name} value={type.name}>{type.name}</option>
         ))}
       </select>
       <pre>
        {selectedPokemon && 
        
        <Link to={`/pokedex/${selectedPokemon.name}`}>
          <h2>{selectedPokemon?.name}</h2>
  <img src={selectedPokemon?.sprites?.other['official-artwork']?.front_default} alt={selectedPokemon?.name} />


          </Link >
          }
        </pre>
       <PokemonList pokemons={filterPokemons}></PokemonList>
    </div>
  )
}

export default Pokedex