import React from "react";
import "./Card.css";

import Header from "./Header/Header";
import FormContainer from "./FormContainer/FormContainer";
import List from "./List/List";

const Card: React.FC = () => {
    return (
        <div className="card">
            <Header />
            <FormContainer />
            <List />
        </div>
    )
};

export default Card;