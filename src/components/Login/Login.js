import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebase.config';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [option, setOption] = useState('register');
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({ email: null, password: null });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const onChangeHandler = (e) => {
        let isFieldValid = true;

        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length >= 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber
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

    const gprovider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const twProvider = new firebase.auth.TwitterAuthProvider();

    const handleSingIn = (provider) => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                setLoggedInUser(result.user)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const signUp = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLoggedInUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }


    const signIn = (e) => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLoggedInUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }
    const singOUt = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser({})
        }).catch((error) => {
            var errorMessage = error.message;
            setError(errorMessage)
        });
    }
    return (
        <>  {
            loggedInUser.email ? <div className='container col-md-3 text-center'> <h3>{loggedInUser.name}</h3>  <h3>Email: {loggedInUser.email}</h3> <h5>Your are  logged in</h5> <button className='btn btn-success w-100 my-1' onClick={singOUt}>Sign Out</button></div>
                :
                <>
                    <div className="col-md-3 mt-5 container bg-light p-3">
                        <div className="tab bg-light p-2 rounded mb-3 row">
                            {/* <button onClick={() => setOption('register')} className={`btn ${option === 'register' ? ' btn-danger' : 'btn-light'}  col`}>Register</button> */}
                        </div>
                        <form className="form my-4">
                            {
                                option === 'register' ? <h3>Create an account</h3> : <h3>Login</h3>
                            }
                            {
                                option === 'register' && <div className="mb-3">
                                    <input name="name" onChange={(e) => onChangeHandler(e)} type="text" placeholder="Name" className="form-control" required />
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
                                    <> <p>Want to create an account? <span className='text-danger' onClick={() => setOption('register')}>Sing Up</span></p></>
                            }
                        </form>
                        <h3 className='text-danger text-center'>Or</h3>
                        <button type="submit" onClick={() => handleSingIn(gprovider)} className="btn btn-success my-1 w-100">Sing In With Google</button>
                        <button type="submit" onClick={() => handleSingIn(fbProvider)} className="btn btn-primary my-1 w-100">Sing In With Facebook</button>
                    </div>
                </>
        } </>
    );
};

export default Login;