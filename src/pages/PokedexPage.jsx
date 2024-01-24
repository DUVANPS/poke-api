import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelecType from "../components/PokedexPage/SelecType"
import '../style/styleHome.css'


const PokedexPage = () => {

    const [inputValue, setInputValue] = useState('')

    const trainerName = useSelector(states => states.trainer)
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'
    const [ pokemons, getPokemons ] = useFetch(url)
    useEffect(() => {
    getPokemons()
    }, [])
    const inputName = useRef()
    const handleSearch = e =>{
        e.preventDefault()
        setInputValue(inputName.current.value.trim().toLowerCase())
    }
    const cbFilter = (pokeInfo) => pokeInfo.name.toLowerCase().includes(inputValue)
    
return (
    <div>
        <div className='solo-img'>
                    <img className='initial-img' src="https://th.bing.com/th/id/OIP.wx-kT9kg76eAnbesGwvkogAAAA?rs=1&pid=ImgDetMain" alt="" />

        </div>
        <h2 className="title-page">Hi <span>{trainerName}</span>, here you can find your favorite pokemon</h2>

        <form  onSubmit={handleSearch}>
            <input className='buscar' ref={inputName} type="text"  placeholder="Find your pokemon"/>
            <button className='encontrar'>Search🚀</button>
        </form>
        <SelecType/>
        <div  className='poke-info'>
        {
            pokemons?.results.filter(cbFilter).map(pokeInfo => (
                <PokeCard 
                key={pokeInfo.url}
                url={pokeInfo.url}
                />
            ))
        }
        </div>
    </div>
)
}

export default PokedexPage