import React, { useState } from "react";
import './Card.css';
import Pokeinfo from '../Pokeinfo/Pokeinfo'; // Assuming Pokeinfo component exists

const Card = ({ data }) => {
    const [showDialog, setShowDialog] = useState(false);
    console.log(data.type);
    const toggleDialog = () => {
        setShowDialog(!showDialog);
    };
    const types = data.type && data.type.length > 0 ? data.type.join(', ') : 'No types';
    return (
        <div className="card-container" key={data.id}>
            <h4>{data.id} {data.name}</h4>
            <h4>Types: {types}</h4>
            <img 
                alt={`data ${data.name}`} 
                src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`}
                style={{ width: '200px', height: '180px' }}
            />
            {/* <button onClick={toggleDialog}>Ability</button>
            {showDialog && <Pokeinfo data={data}/>} Conditionally render Pokeinfo component */}
        </div>
    )
}

export default Card;
