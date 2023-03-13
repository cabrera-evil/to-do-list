import React from "react";
import "./CardContainer.css";

import Card from "./Card/Card";

const CardContainer: React.FC = () => {
    return (
        <div className="card-container">
            <Card />
        </div>
    )
};

export default CardContainer;