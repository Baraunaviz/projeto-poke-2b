import poke from "./assets/pokeapi_256.png"
import eevee from './assets/eevee.jpg'
import './Home.css'
import PokeFlex from "./Pokeflex"
import PokeGrid from "./PokeGrid"
 
const Home = ()=> {
    return (
        <div className="Home">
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
            <img src={poke} />
            <img src={eevee} />
           
        </div>
    )
}

export default Home
