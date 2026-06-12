import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully signed in with email and password
            if (userCredential) {
                navigate('/');
            }
        })
        .catch((error) => {
            // Handle errors here
            alert(error.message);
        });
    };

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully created a new user with email and password
            if (userCredential) {
                navigate('/');
            }
        })
        .catch((error) => {
            // Handle errors here
            alert(error.message);
        });
    };

    return (
        <div className='login'>
            <Link to="/">
                <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/960px-Amazon_logo.svg.png?_=20250504041148" alt="" />
            </Link>

        <div className="login__container">
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button onClick={signIn} className="login__signInButton" type="submit">Sign In</button>
            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button onClick={register} className="login__registerButton">Create your Amazon Account</button>

        </div>

    </div>
  )
}

export default Login
