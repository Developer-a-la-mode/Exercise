import React from 'react';
import './Form.css';

const Form = () => {


    return (
        <div className="form">
        <form>
            <label className="form-label">
                Username
            </label>
            <input type="text" name="name" className="form-input--text" />

            <label className="form-label">
                Age
            </label>
            <input type="text" name="name" className="form-input--text" />

            <input type="submit" className="form-input" value="Add User" />
        </form>
        </div>
        
    )
}

export default Form;