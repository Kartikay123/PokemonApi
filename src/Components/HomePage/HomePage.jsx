import React from "react";
import './HomePage.css';
import Card from "../Card/Card";

const HomePage = ({ data}) => {
    return (
        <div className="card-list">
            {data.map((data) => {

                return (
                    <Card data={data} />
                )
            })}
        </div>
    );
}

export default HomePage;