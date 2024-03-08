import React, { useState } from 'react';
import ShowBoxes from './ShowBoxes';

const BoxGen = (props) => {

    const [allColors, setAllColors] = useState([]);
    const [color, setColor] = useState("");
    const [boxSize, setBoxSize] = useState(0);
    const [error, setError] = useState("");
    const [colorError, setColorError] = useState("");
    
    const mainColors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
        "Brown",
        "Black",
        "White"
    ];

    const handleColor = (e) => {
        setColor(e.target.value);
        setColorError(!mainColors.includes(e.target.value) ? "Enter a valid color" : "");
    }

    const handleBoxSize = e => {
        setBoxSize(e.target.value);
        setError(e.target.value <= 200 ? "Please enter a value greater than 200 pixels" : "");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!error && !colorError) {
            const newColor = {
                color: color,
                boxSize: boxSize
            };
            setAllColors([...allColors, newColor]);

            // Clear out the input fields on successful submission
            setColor('');
            setBoxSize(0);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1 className='error'>{error}</h1>
                    <h1 className='error'>{colorError}</h1>
                    <label htmlFor="colorInput">Color</label>
                    <input
                        className='form-control'
                        type="text"
                        name="color"
                        value={color}
                        onChange={handleColor}
                    />
                </div>

                <div>
                    <label htmlFor="boxSizeInput">Enter the box size in pixels</label>
                    <input
                        className='form-control'
                        type="number"
                        name="box_size"
                        value={boxSize}
                        onChange={handleBoxSize}
                    />
                </div>

                <button
                    className="btn btn-success active form-control mt-3"
                    type="submit"
                    disabled={error || colorError}
                >
                    Add
                </button>
            </form>

            <h1 className="text-center">Colors</h1>
            <ShowBoxes className="align-items center" allColors={allColors} />
        </div>
    );
}

export default BoxGen;
