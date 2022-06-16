import React from 'react';
import './AddUser.css'
import Card from './Card';

const AddUser = (props) => {
    
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