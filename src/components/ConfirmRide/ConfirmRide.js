import React, { useState } from 'react';
import { useParams } from 'react-router';
import { GoogleMap } from '../GoogleMap/GoogleMap';
import RidePackeges from '../RidePackages/RidePackeges';
const ConfirmRide = () => {
    const { rideType } = useParams();
    const [showPackages, setShowPackages] = useState(false)
    const [location, setLocation] = useState({ from: null, to: null })
    const [error, setError] = useState('')
    const onBlurHandler = (e) => {
        if (e.target.value === '') {
            setError('one of you input field is empty')
        }
        else {
            setError('')
        }
        const key = e.target.name
        setLocation({ ...location, [key]: e.target.value })
    }
    return (
        <div className="container">
            <h3>Your ride : {rideType}</h3>
            <div className="row">
                <div className="ride-setection col-md-4">
                    {
                        showPackages || <>  <form className="form my-4">
                            <div className="mb-3">
                                <input name="from" onBlur={(e) => onBlurHandler(e)} type="text" placeholder="from" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <input name="to" onBlur={(e) => onBlurHandler(e)} type="text" placeholder="to" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <input type="date" className="form-control" />
                            </div>
                            <p>{error}</p>
                            <button className='btn btn-warning w-100' onClick={() => setShowPackages(true)}> Search</button>
                        </form>
                        </>
                    }
                    <div>
                        {
                            showPackages && <>
                                <li>{location.from}</li>
                                <li>{location.to}</li>
                                <RidePackeges rideType={rideType} />
                                <button onClick={() => setShowPackages(false)} className='btn btn-warning w-100'>Change location</button>
                            </>
                        }
                    </div>
                </div>
                <div className="col-md-8">
                    {/* <img src={Map} alt="" /> */}
                    <GoogleMap />
                </div>
            </div>
        </div>
    );
};

export default ConfirmRide;