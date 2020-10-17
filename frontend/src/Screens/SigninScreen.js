import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'


function SigninScreen(props) {
    
    const dispatch = useDispatch();

    useEffect(() => {
        
        return () => {
           
        };
    }, [])


    return <div className="form">
        <form onSubmit={submitHandler} >
            <ul className="form-container">
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
                    <button type="submit" className="button primary">Signin</button>
                </li>
                <li>
                    New to local trading?
                </li>
                <li>
                    <Link to="/register" className="button full-width">Create yout local trading account</Link>
                </li>
            </ul>

        </form>
    </div>
}
export default SigninScreen;