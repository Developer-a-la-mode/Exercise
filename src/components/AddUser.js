import React, { useState } from 'react';
import classes from './AddUser.css';
import Card from './Card';

const AddUser = (props) => {
    const [userList, addUserList] = useState({props.userDown});
    addUserList(props.userDown);
    const usersList = [
        ...userList,
        userList
    ];

    console.log(props.userDown);

    return (
        <div>

            {usersList.map(
                user => 
                    <Card className={classes.input} >
                        <div>{props.user.username}</div>
                        <div>{props.user.age}</div>
                    </Card>
                )
            }

        </div>
    )
}

export default AddUser;