import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Homeworld from './Homeworld';

const Details = (props) => {

    const { category, id } = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => {
                console.log(response.data)
                setData(response.data);
            })
            .catch(err => console.log("Error: ", err));
    }, [category, id])



    return (
        <div>
            {
                category === "people" ?
                    <div>

                        <h1><strong>{data.name}</strong></h1>
                        <h3> <Homeworld url={data.homeworld} />  </h3>
                        <h3>Height: {data.height}cm</h3>
                        <h3>Mass: {data.mass}kg</h3>
                        <h3>Hair Color: {data.hair_color}</h3>
                        <h3>Skin Color: {data.skin_color}</h3>
                    </div>
                    : category === "planets" ?
                        <div>
                            <h1><strong>{data.name}</strong></h1>
                            <br />
                            <h3>Rotational Period: {data.rotational_period}</h3>
                            <h3>Orbital Period: {data.orbital_period}kg</h3>
                            <h3>Climate: {data.climate}</h3>
                        </div>
                        : category === "starships" ?
                            <div>
                                <h1><strong>{data.name}</strong></h1>
                                <br />
                                <h3>Model: {data.model}</h3>
                                <h3>Starship class: {data.starship_class}kg</h3>
                                <h3>max atmosphering speed: {data.max_atmosphering_speed}</h3>
                            </div>
                            : <div>

                                <img className='mt-2 circle-rounded' src="https://25.media.tumblr.com/tumblr_m7j9nd059w1rul0hko1_500.gif" alt="Obiwan" width="600px"></img>
                            </div>



            }
        </div >
    );
};

Details.propTypes = {};

export default Details;