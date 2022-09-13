import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const Search = () => {

    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("people");
    const [id, setId] = useState(0);

    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/${selectedCategory}/${id}`);
    }


    useEffect(() => {

        axios.get("https://swapi.dev/api/")
            .then(response => {
                console.log(Object.keys(response.data));
                setCategoryList(Object.keys(response.data));
            })
            .catch(err => console.log("Error: ", err))
    }, [])



    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">Search</label>{"        "}
                    <select className='btn btn-secondary mb-3 ml-5' id="" onChange={(e) => setSelectedCategory(e.target.value)}>
                        {
                            categoryList.map((catergory, i) => {

                                return (
                                    <option key={i}>{catergory}</option>
                                );
                            })
                        }
                    </select>
                </div>

                <div>
                    <label htmlFor="">ID: </label>
                    <input type="number" onChange={(e) => setId(e.target.value)} />
                </div>
                <input className='btn btn-secondary mt-2' type="submit" value="Search" />
            </form>
        </div>
    );
};


export default Search;