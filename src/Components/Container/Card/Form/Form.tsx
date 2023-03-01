import React from "react";
import "./Form.css";

const Form = () => {
    return (
        <div className="todo-form">
            <input className="todo-input" type="text" placeholder="New to do item" />
            <button className="todo-button">Add</button>
        </div>
    )
};

export default Form;