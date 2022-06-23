import { React, useState } from 'react';
import Button from './Button';
import Card from "./Card";
import classes from './AddUser.module.css';

const Form = (props) => {
    const [userName, setUserName] = useState(' ')
    const [userAge, setUserAge] = useState(' ')

    const onChangeUserHandler = (event) => {
        setUserName(event.target.value);
    }

    const onChangeAgeHandler = (event) => {
        setUserAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        const userData = {
            username: userName,
            age: userAge
        };
        props.saveNewUser(userData);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler} htmlFor="username">
                <label className="form-label">
                    Username
                </label>
                <input type="text" name="name" id="username" className="form-input--text" onChange={onChangeUserHandler} />

                <label className="form-label" htmlFor="age">
                    Age
                </label>
                <input type="text" name="name" id="age" className="form-input--text" onChange={onChangeAgeHandler} />

                <Button type="submit">Add User</Button>
            </form>
        </Card>

    )
}

export default Form;