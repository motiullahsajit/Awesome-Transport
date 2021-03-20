import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

const RidePackage = (props) => {
    const { vehicle, person, cost, vehicleImg } = props.pack
    return (
        <div className='row align-items-center p-2 bg-light my-2 w-100 m-0 p-2'>
            <div className="col-4"><img src={vehicleImg} className='w-100' alt="" /></div>
            <div className="col-3">{vehicle}</div>
            <div className="col-3"><FontAwesomeIcon icon={faUserFriends} className='mx-1' />{person}</div>
            <div className="col-2 p-2">{cost}</div>
        </div>
    );
};

export default RidePackage;