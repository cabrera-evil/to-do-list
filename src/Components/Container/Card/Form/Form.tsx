import React from "react";
import "./Form.css";

const Form: React.FC = () => {
    return (
        // Convert the code above to a formulary
        <form className="todo-form">
            <input className="todo-input" type="text" placeholder="New to do item" />
            <button className="todo-button">Add</button>
        </form>
    )
};

export default Form;