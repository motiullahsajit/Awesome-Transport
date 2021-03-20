import { useEffect, useState } from 'react';
import Ride from '../Ride/Ride';
import RideTypeData from './RideTypeData.json';


const RideSelection = () => {
    const [rides, setRides] = useState([])

    useEffect(() => {
        setRides(RideTypeData)
    }, [])

    return (
        <div className="container text-center">
            <h1 className='text-warning my-5'>Choose Your Rides</h1>
            <div className='row g-5'>
                {
                    rides.map(ride => <Ride key={ride.rideType} ride={ride} />)
                }
            </div>
        </div>
    );
};

export default RideSelection;