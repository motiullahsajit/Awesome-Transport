import { useEffect, useState } from 'react';
import Ride from '../Ride/Ride';
import RideTypeData from './RideTypeData.json';


const RideType = () => {
    const [rides, setRides] = useState([])

    useEffect(() => {
        setRides(RideTypeData)
    }, [])

    return (
        <div className="container text-center">
            <h1 className='text-success my-5'>Choose Your Rides</h1>
            <div className='row g-5'>
                {
                    rides.map(ride => <Ride ride={ride} />)
                }
            </div>
        </div>
    );
};

export default RideType;