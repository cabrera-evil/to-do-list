import React from "react";
import "./Card.css";

import CardHeader from "./CardHeader/CardHeader";
import FormContainer from "../../FormContainer/FormContainer";
import NoteContainer from "../../NoteContainer/NoteContainer";

const Card: React.FC = () => {
    return (
        <div className="card">
            <CardHeader />
            <FormContainer />
            <NoteContainer />
        </div>
    )
};

export default Card;