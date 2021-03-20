import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, googleSingIn, initializeLoginFramework, signInWithEmailAndPassword, handleSignOut, facebookSingIn, } from './LoginManager';


const Login = () => {
    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [option, setOption] = useState('register');
    const [error, setError] = useState('');
    const [formData, setFormData] = useState();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfrimPassword] = useState('')

    const onChangeHandler = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length >= 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber
            setPassword(e.target.value)
        }
        if (e.target.name === 'confirmPassword') {
            const isPasswordValid = e.target.value.length >= 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber
            setConfrimPassword(e.target.value)
        }
        if (password !== confirmPassword) {
            setError('Your passwords didnot matched')
        }
        if (password === confirmPassword) {
            setError('')
        }
        if (isFieldValid) {
            const key = e.target.name
            setFormData({ ...formData, [key]: e.target.value })
            setError('')
        }
        else {
            setError('Please check your Email format or Password (password should have more then six character and a number in it)')
        }
    }
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(formData.name, formData.email, formData.password).then(res => {
            handleResponse(res, true)
        }).catch(error => { setError(error) })
    }

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(formData.email, formData.password).then(res => {
            handleResponse(res, true)
        }).catch(error => { setError(error) })
    }

    const singOUt = (e) => {
        handleSignOut().then(res => {
            handleResponse(res, false)
        }).catch(error => { setError(error) })
    }

    const handleGoogleSingIn = () => {
        googleSingIn().then(res => {
            handleResponse(res, true)
        }).catch(error => { setError(error) })
    }
    const handleFacebookSingIn = () => {
        facebookSingIn().then(res => {
            handleResponse(res, true)
        }).catch(error => { setError(error) })
    }

    const handleResponse = (res, redirect) => {
        setLoggedInUser(res)
        redirect && history.replace(from);
    }
    return (
        <>  {
            loggedInUser.email ?
                <div className='container col-md-3 text-center mt-5'>
                    <div className="card text-left">
                        <img src={loggedInUser.photoURL} alt="" />
                        <div className="card-body">
                            <h3>Name: {loggedInUser.displayName}</h3>
                            <h3>Email: {loggedInUser.email}</h3>
                        </div>
                        <button className='btn btn-success w-100 rounded-0' onClick={singOUt}>Sign Out</button>
                    </div>
                </div>
                :
                <>
                    <div className="col-md-3 mt-5 container bg-light p-3">
                        <form className="form my-4">
                            {
                                option === 'register' ? <h3>Create an account</h3> : <h3>Login</h3>
                            }
                            {
                                option === 'register' && <div className="mb-3">
                                    <input name="name" type="text" onChange={(e) => onChangeHandler(e)} placeholder="Name" className="form-control" required />
                                </div>
                            }
                            <div className="mb-3">
                                <input name="email" onChange={(e) => onChangeHandler(e)} type="email" placeholder="Email" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <input name="password" onChange={(e) => onChangeHandler(e)} type="password" placeholder="Password" className="form-control" required />
                            </div>
                            {
                                option === 'register' && <div className="mb-3">
                                    <input name="confirmPassword" onChange={(e) => onChangeHandler(e)} type="password" placeholder="Confirm Password" className="form-control" required />
                                </div>
                            }
                            <p className='text-danger'>{error}</p>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">Remember me</label>
                            </div>
                            <div className="mb-3 d-grid">
                                {
                                    option === 'register' ?
                                        <button type="submit" onClick={signUp} className="btn btn-danger w-100">Register</button>
                                        :
                                        <button type="submit" onClick={signIn} className="btn btn-danger w-100">Login</button>
                                }
                            </div>
                            {
                                option === 'register' ? <> <p>Already have an account? <span className='text-danger' onClick={() => setOption('login')}>Login</span></p></> :
                                    <> <p>Don't have an account? <span className='text-danger' onClick={() => setOption('register')}>Create an account</span></p></>
                            }
                        </form>
                        <h3 className='text-danger text-center'>Or</h3>
                        <button type="submit" onClick={handleGoogleSingIn} className="btn btn-success my-1 w-100">Sing In With Google</button>
                        <button type="submit" onClick={handleFacebookSingIn} className="btn btn-primary my-1 w-100">Sing In With Facebook</button>
                    </div>
                </>
        } </>
    );
};

export default Login;