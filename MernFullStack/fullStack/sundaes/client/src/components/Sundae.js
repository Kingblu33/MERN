import React, { useState } from 'react';



const Sundae = (props) => {
    const [topping, setTopping] = useState([])
    const { flavor, toppings, WhippedCreamCherry, name, numScoops } = props.sundae;
    const onSubmitHandler = (event) => {
        event.preventDefault();

        props.addToppingsToDb(topping);

        setTopping("");

    }
    return (
        <div className="sundaeBox">
            <h2 className="mb-2 d-flex flex-wrap">Sundae:{name} </h2>
            <h4>made with {numScoops} of {flavor},
                {toppings.length > 0 ? toppings.join(", ") : ""}
                {WhippedCreamCherry ? " Contains whipped Cream and a cherry" : ", Doesnt contain Whipped Cream Cherry"}
            </h4>

            {/* <button onClick={() => props.addToppingsToDb("chocolate Shavings")}>Add topping</button> */}
            <form onSubmit={onSubmitHandler}>
                <input value={topping} placeholder="Add Topping" type="text" className="form-control-sm" onChange={(event) => setTopping(event.target.value)} />
                <input type="submit" className="btn btn-info" value="add" />
            </form>
        </div>
    )
}

export default Sundae;