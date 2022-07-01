import { React, useState, useRef } from 'react';
import Button from './Button';
import Card from "./Card";
import classes from './AddUser.module.css';
import ErrorModal from './ErrorModal';
import Wrapper from './Wrapper';


const Form = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error,setError] = useState();

    const addUserHandler = (event) => {
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler} htmlFor="username">
                    <label className="form-label">
                        Username
                    </label>
                    <input type="text" name="name" id="username" className="form-input--text" ref={nameInputRef} />

                    <label className="form-label" htmlFor="age">
                        Age
                    </label>
                    <input type="text" name="name" id="age" className="form-input--text" ref={ageInputRef} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default Form;