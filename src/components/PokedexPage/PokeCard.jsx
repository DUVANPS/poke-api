import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/styless.css'


function PokeCard({ url }) {
    const [pokemon, getPokemon] = useFetch(url)
    useEffect(() => {
        getPokemon()
    }, [])

    const navigate = useNavigate()
    const handleNavigatePokemon = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    return (
        <div  onClick={handleNavigatePokemon}>
            <div className="pokedex" >
                <article className="pokemon-card">
                <header>
                    <img className="pokemon1.jpg" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                </header>
                <section>
                    <h3>{pokemon?.name}</h3>
                </section>
                <ul>
                    {
                        pokemon?.types.map(typeInfo => (
                            <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
                        ))
                    }
                </ul>
                
                <ul>
                    {
                        pokemon?.stats.map(statInfo => (
                            <li key={statInfo.stat.url}><span>{statInfo.stat.name}</span><span>{statInfo.base_stat}</span></li>
                        ))
                    }
                </ul>
            </article>

            </div>
        
        </div>
    )
}

export default PokeCard