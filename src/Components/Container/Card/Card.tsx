import React from "react";
import "./Card.css";
import Header from "./Header/Header";
import Form from "./Form/Form";
import List from "./List/List";

const Card = () => {
    return (
        <div className="card">
            <Header />
            <Form />
            <List />
        </div>
    )
};

export default Card;