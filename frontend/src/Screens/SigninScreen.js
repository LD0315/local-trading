import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';


function SigninScreen(props) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        
        return () => {
           
        };
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return <div className="form">
        <form onSubmit={submitHandler} >
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary full-width">Sign in</button>
                </li>
                <li>
                    New to LOCAL TRADING?
                </li>
                <li>
                  <Link to="/register" className="button secondary full-width text-center">Create yout local trading account</Link>
                </li>
            </ul>

        </form>
    </div>
}
export default SigninScreen;