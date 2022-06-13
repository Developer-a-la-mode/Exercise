import React from 'react';
import './Form.css';

const Form = () => {


    return (
        <div className="form">
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
        
    )
}

export default Form;