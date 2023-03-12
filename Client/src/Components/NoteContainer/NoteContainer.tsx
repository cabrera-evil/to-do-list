import React from "react";
import "./NoteContainer.css";

import NoteItem from './NoteItem/NoteItem';

const NoteContainer: React.FC = () => {
    return (
        <ul className="note-container">
            <NoteItem />
        </ul>
    )
};

export default NoteContainer;