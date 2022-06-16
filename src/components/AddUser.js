import React from 'react';
import './AddUser.css'
import Card from './Card';

const AddUser = (props) => {
    console.log(props.userDown)
    return (
        <div>
            <Card className="Card" >
                <div>{props.userDown.username}</div>
                <div>{props.userDown.age}</div>
            </Card>
        </div>
    )
}

export default AddUser;