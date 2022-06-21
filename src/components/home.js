import React from 'react';
import authService from "../services/auth.service";
function Home(props) {
    const handelError =() => {
        const data  = {
            refreshToken: localStorage.getItem('refreshToken')
        }
        authService.refreshToken(data)
            .then(res => {
                // console.log(res)
            })
    }
    return (
        <div>
            <div className="container">
                <header className="jumbotron">
                    <h3>Welcome to Home</h3>
                    <button onClick={handelError}> error messeg</button>
                </header>
            </div>
        </div>
    );
}

export default Home;
