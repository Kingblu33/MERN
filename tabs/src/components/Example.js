import React, { useState, useEffect } from 'react'

const Example = (props) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, []);

    return (
        <div>
            {people.length > 0 && people.map((person, index) => {
                return (<div key={index}>
                    Name:{person.name}
                    <div>
                        Hair Color:{person.hair_color}
                    </div>
                </div>)


            })}
        </div>
    );
}
export default Example;