import React from 'react';
import './Selecttype.css';
const Selecttype = ({ type, handleTypeSelect }) => {
  return (
    <div>
    
      <select id="pokemonTypes" onChange={handleTypeSelect}>
        <option value="">Pokemon Type:</option>
        {type.map((typeName, index) => (
          <option key={index} value={typeName}>
            {typeName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selecttype;
