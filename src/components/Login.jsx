import React, { Component } from 'react';

class Login extends Component {
    render() { 
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <h1 className='text-center mt-5 mb-4'>Login</h1>
                        <label className="d-flex justify-content-center text-center mt-3" for="uname"><b>Username</b></label>
                        <input className="d-flex mx-auto" type="text" placeholder="Enter Username" name="uname" required />
                        <label className="d-flex justify-content-center text-center mt-3" for="psw"><b>Password</b></label>
                        <input className="d-flex mx-auto" type="password" placeholder="Enter Password" name="psw" required />
                        <button className="d-flex mx-auto mt-3" type="submit">Login</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Login;