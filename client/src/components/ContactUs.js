import React, { useState } from "react";

const ContactUs = (props) => {
    
    const [value, setValue] = useState({});

    const submitContact = e =>{
        e.preventDefault();
        // normally the data entered by the user would be sent to the API here, but our current API cannot hold contact data
        props.history.push('/contact-success');
    }

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <form onSubmit={submitContact}>
                <input
                    type='text'
                    name='firstname'
                    value={value.name}
                    onChange={handleChange}
                    placeholder='First Name'
                />

                <input
                    type='text'
                    name='lastname'
                    value={value.age}
                    onChange={handleChange}
                    placeholder='Last Name'
                />

                <input
                    type='email'
                    name='email'
                    value={value.email}
                    onChange={handleChange}
                    placeholder='e-mail'
                />

                <button>Contact Us!</button>
            </form>
        </div>
    )
}

export default ContactUs;