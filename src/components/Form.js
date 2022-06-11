import React from 'react';
import './Form.css';

const Form = () => {


    return (
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>

    )
}

export default Form;