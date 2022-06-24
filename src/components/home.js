import React, { useEffect } from 'react';
import AuthService from "../services/auth.service";
import axios from "axios";
function Home(props) {
    // const handelError =() => {
    //     const data  = {
    //         refreshToken: localStorage.getItem('refreshToken')
    //     }
    //     AuthService.refreshToken(data)
    //         .then(res => {
    //             // console.log(res)
    //         })
    // }
    const [data, setData] = React.useState([]);
    console.log(data);
    useEffect(() => {
        getDataAll();
    }, [])



    const getDataAll = async () => {
        let res = await AuthService.getData();
        setData(res?.data?.all_properties);
        console.log(res);
    }



    return (
        <div>
            <div className="container">
                <header className="jumbotron">
                    <h3>Welcome to Home</h3>
                    {/* <button onClick={handelError}> error messeg</button> */}
                </header>
            </div>
        </div>
    );
}

export default Home;
