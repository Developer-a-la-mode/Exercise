import { React, useState } from 'react';
import Button from './Button';
import Card from "./Card";
import classes from './AddUser.module.css';
import ErrorModal from './ErrorModal';


const Form = (props) => {
    const [enteredUserName, setEnteredUserName] = useState(' ');
    const [userAge, setUserAge] = useState(' ');
    const [error,setError] = useState();

    const onChangeUserHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const onChangeAgeHandler = (event) => {
        setUserAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+userAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredUserName, userAge);
        setEnteredUserName('');
        setUserAge('')
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler} htmlFor="username">
                    <label className="form-label">
                        Username
                    </label>
                    <input type="text" name="name" id="username" className="form-input--text" onChange={onChangeUserHandler} value={enteredUserName} />

                    <label className="form-label" htmlFor="age">
                        Age
                    </label>
                    <input type="text" name="name" id="age" className="form-input--text" onChange={onChangeAgeHandler} value={userAge} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default Form;