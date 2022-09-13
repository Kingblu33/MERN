import React, { useState } from 'react'

import ShowBoxes from './ShowBoxes';




const BoxGen = (props) => {

    const [allColors, setAll_colors] = useState([]);
    const [color, setColor] = useState("");
    const [box_size, setBox_size] = useState(0);

    //function to handle the state of the form input and update it
    const handleColor = (e) => {
        setColor(e.target.value);


    }

    const handleBoxSize = e => {

        setBox_size(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const newColor = {
            color: color,
            box_size: box_size
        };
        setAll_colors([...allColors, newColor]);

        // Ninja Bonus: clear out the color input on successful submission.
        //to clear the input box after submission, we need to set the input box to an empty string
        setColor('');
        setBox_size(0);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="colorInput">Color</label>
                    <input className='form-control'
                        type="text" name="color" value={color}
                        onChange={handleColor}
                    />

                </div>

                <div>
                    <label htmlFor="boxSizeInput">Enter the box size in pixels</label>
                    <input
                        className='form-control'
                        type="number" name="box_size" value={box_size}
                        onChange={handleBoxSize}


                    />
                </div>
                <button className="btn btn-success active  form-control mt-3" type="submit" >Add</button>

            </form>
            <h1 className="text-center">Colors</h1>
            <ShowBoxes className="align-items center" allColors={allColors} />
        </div>
    );
}


export default BoxGen;