import React, { useState } from "react";

export default function Form(props) {
    const [name, setName] = useState('Add task name here!');

    function handleSubmit(e) {
        if (name === '') {
            alert('Please enter a name');
            e.preventDefault();
        } else {
            e.preventDefault();
            props.addTask(name);
            setName('');
        }
    }

    function handleChange(e) {
        setName(e.target.value);
    }


    return (
        <form action="" onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What need to be done?
                </label>
            </h2>
            <input type="text" id="new-todo-input" className="input input__lg" name="text" autoComplete="off" value={name} onChange={handleChange} />
            <button type="submit" className="btn btn__primary btn__lg">Add</button>
        </form>
    );
}