import React, { useState, useEffect } from "react"
import axios from "axios"
import Sundae from "../components/Sundae"

const Main = (props) => {
    const [sundaes, setSundaes] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/sundaes/findall")
            .then(res => {
                console.log(res.data)
                setSundaes(res.data);
            })
            .catch(err => console.log(err))
    }, [])
    const addToppings = (i, topping, _id) => {
        console.log(i, topping, _id)
        const copySundaes = [...sundaes];
        copySundaes[i].toppings.push(topping)
        setSundaes(copySundaes);
        axios.put(`http://localhost:8000/api/sundaes/addToppings/${_id}`, { topping })
            .then(res => {
                console.log(res);
                const copySundaes = [...sundaes];
                copySundaes[i].toppings.push(topping)
                setSundaes(copySundaes);
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="sundaeList body">
            {
                sundaes.map((sundae, i) => {
                    return <Sundae key={sundae._id} sundae={sundae} index={i} addToppingsToDb={(topping) => addToppings(i, topping, sundae._id)} />
                })
            }
        </div>
    )
}
export default Main;