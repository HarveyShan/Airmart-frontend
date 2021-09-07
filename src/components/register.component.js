import reactDom from "react-dom";
import React, { useState, useCallback } from "react";
import { useHistory } from 'react-router-dom';
import { unstable_createPortal } from "react-dom";
import Axios from "axios";


const Register = () => {

    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const history = useHistory();

    const handleSubmit = useCallback(async (event) => {

        event.preventDefault();

        const registerInfo = await Axios.post("http://127.0.0.1:5000/register", {

            params: {
                email: emailReg,
                password: passwordReg
            }

        })

        // event.preventDefault();
    })

    const log = useCallback(() => {
        history.push('/login');
    })



    return (

        <form form onSubmit={handleSubmit} >

            <div>
                <h1>Register Page</h1>
            </div>

            {/* email */}
            <div>
                <label htmlFor="emailReg">Email: </label>
                <input
                    type="text"
                    value={emailReg}
                    placeholder="enter your email"
                    onChange={({ target }) => setEmailReg(target.value)}
                />
            </div>

            {/* password */}
            <div>
                <label htmlFor="passwordReg">password: </label>
                <input
                    type="passwordReg"
                    value={passwordReg}
                    placeholder="enter a password"
                    onChange={({ target }) => setPasswordReg(target.value)}
                />
            </div>

            {/* confirm  */}
            {/* <div>
                <label htmlFor="passwordReg">password: </label>
                <input
                    type="passwordReg"
                    value={passwordReg}
                    placeholder="confirm  password"
                    onChange={({ target }) => setPasswordReg(target.value)}
                />
            </div> */}



            <button
                onClick={log}
            >Already Registered? Click here to log in</button>

            <button type="submit">Register</button>


        </form >
    )
}

export default Register;