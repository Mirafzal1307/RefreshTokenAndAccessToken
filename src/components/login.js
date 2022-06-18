import React from 'react';
import AuthService from '../services/auth.service';



function Login(props) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState('');

    // const required = (value) => {
    //     if (!value) {
    //         return (
    //             <div className="alert alert-danger" role="alert">
    //                 This field is required!
    //             </div>
    //         );
    //     }
    // };
    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);

        if (username.length === 0 || password.length === 0) {
            setMessage('Please enter username and password');
            setLoading(false);
        }
        else{
            AuthService.login(username, password).then(
                () => {
                    props.history.push('/');
                    // window.location.reload();
                }
            ).catch(error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    setMessage(resMessage);
                setLoading(false);
            })
            }
            
            
            return;
            
        
    }
    return (
       
        <div className='col-md-12' >
            <div className='card card-container' >

                <form className='form-signin' onSubmit={handleLogin}>
                    <div className='form-group' >
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            className='form-control'
                            name='username'
                            value={username}
                            onChange={onChangeUsername}
                            // validations={[required]}
                        />
                    </div>
                    <div className='form-group' >
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            name='password'
                            value={password}
                            onChange={onChangePassword}
                            // validations={[required]}
                        />
                    </div>
                    <div className='form-group' >
                        <button
                        className='btn btn-lg btn-primary btn-block'
                        type='submit'
                        disabled={loading}
                        >
                            {loading && (
                                <span className='spinner-border spinner-border-sm'></span>
                            )}
                            <span>Login</span>
                        </button>
                    </div>
                    {message && (
                        <div className='alert alert-danger' role='alert'>
                            {message}
                        </div>
                    )}


                </form>

            </div>
        </div>
    );
}

export default Login;