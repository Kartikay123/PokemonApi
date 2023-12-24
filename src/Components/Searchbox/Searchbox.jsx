import React from "react";
import './Searchbox.css';

const Searchbox = ({ className, placeholder, handler }) =>
(
    <input className={`classnamechange ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={handler} />
)

export default Searchbox;