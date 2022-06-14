import { React, useState } from 'react';
import './Form.css';

const Form = () => {
    const [userName,onSetUserName] = useState(' ')
    const [userAge,onSetUserAge] = useState(' ')

    const onChangeUserHandler = (event) => {
        const userName = event.target.value;
    }

    const onChangeAgeHandler = (event) => {
        const userAge = event.target.value;
    }

    const submitHandler = () => {
        console.log(userAge, userName);
    }

    return (
        <div className="form">
        <form>
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