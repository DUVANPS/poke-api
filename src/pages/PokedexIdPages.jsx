import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import '../style/styleCrdId.css'

const PokedexIdPages = () => {

    const { id } = useParams()


    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const [pokemon, getPokemon] = useFetch(url)
    useEffect(() => {
    getPokemon()
    }, [])
    
return (
    <div className="container-pokemons-cardid">
        <div className="img-pokemons">
                    <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h2 className="title-pokemons">{pokemon?.name}</h2>
        </div>
        
        
        <div className="container-atak">
            <ul className="pokemosn">
                    {
                        pokemon?.types.map(typeInfo => (
                            <li className="title-hp" key={typeInfo.type.url}>{typeInfo.type.name}</li>
                        ))
                    }
                </ul>
                
                <ul className="other-pokemons">
                    {
                        pokemon?.stats.map(statInfo => (
                            <li className="title-hp" key={statInfo.stat.url}><span>{statInfo.stat.name}</span><span>{statInfo.base_stat}</span></li>
                        ))
                    }
                </ul>
        </div>
        
    </div>
)
}

export default PokedexIdPages