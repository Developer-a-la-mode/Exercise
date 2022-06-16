import React from 'react';
import './AddUser.css'
import Card from './Card';

const AddUser = (props) => {

    const saveNewUser = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString()
        }
        console.log(userData);
    }
    
    return (
        <div>
            <Card className="Card" >
                <div>Name</div>
                <div>Age</div>
            </Card>
        </div>
    )
}

export default AddUser;