import React, { useState, useEffect } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "./FormInput/FormInput";
import Button from "./FormButton/FormButton";

interface Note {
    text: string;
    complete: boolean;
}

const Form: React.FC = () => {
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState<Note[]>(() => {
        const storedNotes = localStorage.getItem("notes");
        return storedNotes ? JSON.parse(storedNotes) : [];
    });

    // Get the form data
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (note.trim() === "") {
            // If note is empty, show an error message using toast
            toast.error("Please enter a valid note!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        // Add the new note to the array of notes
        setNotes([...notes, { text: note, complete: false }]);
        // Clear the input
        setNote("");

        // Notify the user that the note was added
        toast.success("Note added!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };


    // Save the notes to local storage whenever they change
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const handleComplete = (index: number) => {
        const newNotes = [...notes];
        newNotes[index].complete = !newNotes[index].complete;
        setNotes(newNotes);
    };

    return (
        <>
            <form className="todo-form" onSubmit={handleSubmit}>
                <Input note={note} setNote={setNote} />
                <Button />
            </form>
            <ToastContainer />
        </>
    );
};

export default Form;
