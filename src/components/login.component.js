import React, { useState, useCallback } from "react";
//hook
import { useHistory } from 'react-router-dom';
import Axios from 'axios';


const Login = () => {

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");


    //hook 

    const history = useHistory();

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();

        const result = await Axios.get("http://127.0.0.1:5000/login", {
            params: {
                email: email,
                password: password
            }
        });

        console.log(result);

        if (result) {
            history.push('/home')
        }

    })

    return (
        <form form onSubmit={handleSubmit}>

            <div>
                <h1>Login Page</h1>
            </div>

            <div>
                <label htmlFor="email">email: </label>

                <input
                    type="text"
                    value={email}
                    placeholder="enter a email"
                    onChange={({ target }) => setemail(target.value)}
                />
            </div>


            <div>
                <label htmlFor="password">password: </label>
                <input
                    type="password"
                    value={password}
                    placeholder="enter a password"
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>


            <button type="submit">Login</button>
            <button onClick={() => {
                history.push('/register');
            }}>Register Now</button>

        </form>
    )
}

export default Login;