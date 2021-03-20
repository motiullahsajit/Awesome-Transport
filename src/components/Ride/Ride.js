import React from 'react';
import { useHistory } from 'react-router-dom';
const Ride = (props) => {
    const history = useHistory()
    const handleRide = (rideType) => {
        history.push(`/ride/${rideType}`);
    }

    const { rideType, rideImg, shortDes } = props.ride;
    return (
        <div onClick={() => handleRide(rideType)} className="col-lg-3 col-md-6 col-sm-12 my-2">
            <div className="card h-100">
                <img src={rideImg} className="card-img-top p-3" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{rideType}</h4>
                    <p className="card-text">{shortDes}</p>
                </div>
            </div>
        </div>
    );
};

export default Ride;