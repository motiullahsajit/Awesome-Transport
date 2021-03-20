import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className='container col-md-3 text-center mt-5'>
            <h2 className='text-warning'>Your Profile</h2>
            <div className="card text-left">
                <img src={loggedInUser.photoURL} alt="" />
                <div className="card-body">
                    <h4>Name: {loggedInUser.displayName}</h4>
                    <h4>Email: {loggedInUser.email}</h4>
                </div>
                <button className='btn btn-warning w-100 rounded-0' onClick={() => setLoggedInUser({})}>Sign Out</button>
            </div>
        </div>
    );
};

export default Profile;