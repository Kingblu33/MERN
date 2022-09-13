import React, { useState } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom"

const Create = (props) => {
    const [form, setForm] = useState({
        name: "",
        flavor: "",
        numScoops: 0,
        WhippedCreamCherry: false
    })
    const history = useHistory();
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value

        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/sundaes/create", form)
            .then(res => {
                history.push("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form className="w-50 d-block mx-auto my-3 " onSubmit={onSubmitHandler} >
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" name="name" className='form-control' onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='flavor'>Flavor:</label>
                    <input type="text" name="flavor" className='form-control' onChange={onChangeHandler} />
                </div>

                <div className='form-group'>
                    <label htmlFor='numSoops'>Number of Scoops:</label>
                    <input type="number" name="numSoops" className='form-control' onChange={onChangeHandler} />
                </div>

                <div className='form-group m-3'>
                    <label className='form-check-label' htmlFor='WhippedCreamCherry'>WhippedCream and a Cherry?:</label>
                    <input type="checkbox" name="WhippedCreamCherry" className='form-check-input' onChange={onChangeHandler} />

                </div>

                <input type="submit" className="btn  btn-success" />

            </form>
        </div>
    )
}

export default Create;