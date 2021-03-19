import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { GoogleMap } from '../GoogleMap/GoogleMap';
import RidePackeges from '../RidePackages/RidePackeges';
const Destination = () => {
    const { rideType } = useParams();
    const { destination } = useParams();
    const [showPackages, setShowPackages] = useState(false)
    const [location, setLocation] = useState({ from: null, to: null })
    const onBlurHandler = (e) => {
        const key = e.target.name
        setLocation({ ...location, [key]: e.target.value })
    }
    return (
        <>
            {
                destination === 'destination' ? <h1 className='text-center text-warning mt-5'>Please select your ride first <br /><Link to='/home'><small>You can Click Here</small></Link> </h1>
                    :
                    <>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="ride-setection col-md-5">
                                    {
                                        showPackages || <>  <form onSubmit={() => setShowPackages(true)} className="form my-4">
                                            <div className="mb-3">
                                                <input name="from" onBlur={(e) => onBlurHandler(e)} type="text" placeholder="from" className="form-control" required />
                                            </div>
                                            <div className="mb-3">
                                                <input name="to" onBlur={(e) => onBlurHandler(e)} type="text" placeholder="to" className="form-control" required />
                                            </div>
                                            <div className="mb-3">
                                                <input type="date" className="form-control" required />
                                            </div>
                                            <div className="mb-3">
                                                <input type="time" className="form-control" required />
                                            </div>
                                            <button className='btn btn-warning w-100' type='submit'> Search</button>
                                        </form>
                                        </>
                                    }
                                    <div>
                                        {
                                            showPackages && <>
                                                <div className="p-3 text-white bg-warning">
                                                    <h3>From : {location.from}</h3>
                                                    <h3>To : {location.to}</h3>
                                                </div>
                                                <RidePackeges rideType={rideType} />
                                                <button onClick={() => setShowPackages(false)} className='btn btn-warning text-white w-100'>Change location</button>
                                            </>
                                        }
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <GoogleMap />
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    );
};

export default Destination;