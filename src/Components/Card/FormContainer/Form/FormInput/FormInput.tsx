import React from "react";

import "./FormInput.css";

interface Props {
    note: string;
    setNote: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<Props> = ({ note, setNote }) => {
    return (
        <input
            className="form-input"
            type="text"
            placeholder="New to do item"
            value={note}
            onChange={(e) => setNote(e.target.value)}
        />
    );
};

export default Input;