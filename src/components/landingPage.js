import reactDom from "react-dom";
import React, { useState, useCallback } from "react";
import { useHistory } from 'react-router-dom';

const LandingPage = () => {

    const history = useHistory();

    const handleSubmit = useCallback(() => {
        history.push('/login');
    })



    return (


        <form onSubmit={handleSubmit}>

            <div>

                <h1>This is the Landing Page</h1>

            </div>
            <button type="submit">Log in</button>
        </form>

    )
}

export default LandingPage;