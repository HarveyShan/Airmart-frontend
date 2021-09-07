import reactDom from "react-dom";
import React, { useState, useCallback } from "react";
import { useHistory } from 'react-router-dom';

const Home = () => {

    const history = useHistory();

    const handleSubmit = useCallback(() => {
        history.push('/');
    })



    return (


        <form onSubmit={handleSubmit}>

            <div>

                <h1>Welcome Back! Home Page</h1>

            </div>
            <button type="submit">Log Out</button>
        </form>

    )
}

export default Home;