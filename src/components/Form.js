import { React, useState } from 'react';
import './Form.css';

const Form = (props) => {
    const [userName,setUserName] = useState(' ')
    const [userAge,setUserAge] = useState(' ')

    const onChangeUserHandler = (event) => {
        setUserName(event.target.value);
    }

    const onChangeAgeHandler = (event) => {
        setUserAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            username: userName,
            age: userAge
        };
        props.saveNewUser(userData);
    }

    return (
        <div className="form">
        <form onSubmit={submitHandler}>
            <label className="form-label">
                Username
            </label>
            <input type="text" name="name" className="form-input--text" onChange={onChangeUserHandler} />

            <label className="form-label">
                Age
            </label>
            <input type="text" name="name" className="form-input--text" onChange={onChangeAgeHandler} />

            <input type="submit" className="form-input" value="Add User" onSubmit={submitHandler} />
        </form>
        </div>
        
    )
}

export default Form;