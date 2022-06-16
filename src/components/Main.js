import React from 'react';
import Card from './Card';
import Form from './Form';
import AddUser from './AddUser';

const Main = () => {
    const saveNewUserHandler = (enteredUserData) => {
        const userDataID = {
            ...enteredUserData,
            id: Math.random().toString()
        }
        console.log(userDataID);
    }

    return (
        <Card className="Card">
            <Form saveNewUser={saveNewUserHandler} />
            <AddUser />
        </Card>


    )
};

export default Main;