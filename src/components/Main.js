import React, { useState } from 'react';
import Card from './Card';
import Form from './Form';
import AddUser from './AddUser';

const Main = () => {
    const [users,addUsers] = useState(' ');


    const saveNewUserHandler = (enteredUserData) => {
        const userDataID = {
            ...enteredUserData,
            id: Math.random().toString()
        }
        addUsers(userDataID);
    }

    return (
        <Card className="Card">
            <Form saveNewUser={saveNewUserHandler} />
            <AddUser userDown={users} />
        </Card>
    )
};

export default Main;