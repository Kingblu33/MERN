import { useEffect, useState } from 'react';
import Axios from 'axios';

const Pokemon = (props) => {

    const [poke, setPoke] = useState([]);

    const fetchPokemon = () => {

        Axios.get('https://pokeapi.co/api/v2/pokemon?limit=5')
            .then(response => {
                setPoke(response.data.results);
            })
            .catch(error => console.log(error))

    }


    return (
        <div className="container">
            <h1>Fetch Pokemons</h1>
            <div className="button-row">
                <button onClick={fetchPokemon} >Get Pokemons!</button>
            </div>


            <ul>
                {
                    poke.map((item, i) => {
                        return <li key={i}>{i}. {item.name}

                        </li>

                    })
                }
            </ul>


        </div>
    );


}

export default Pokemon;