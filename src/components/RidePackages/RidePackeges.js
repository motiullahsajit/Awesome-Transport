import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RidePackage from '../RidePackage/RidePackage';
import BikePackages from './PackagesData/BikePackages.json'
import CarPackages from './PackagesData/CarPackages.json'
import BusPackages from './PackagesData/BusPackages.json'
import TrainPackages from './PackagesData/TrainPackages.json'

const RidePackeges = (props) => {
    const rideType = props.rideType
    const [bikePackages, setBikePackages] = useState([])
    const [carPackages, setCarPackages] = useState([])
    const [busPackages, setBusPackages] = useState([])
    const [trainPackages, settrainPackages] = useState([])
    useEffect(() => {
        setBikePackages(BikePackages)
        setCarPackages(CarPackages)
        setBusPackages(BusPackages)
        settrainPackages(TrainPackages)
    }, [])

    return (
        <div className='w-100 p-2'>
            {
                rideType === 'BIKE' && bikePackages.map(pack => <RidePackage key={pack.cost} pack={pack} />)
            }
            {
                rideType === 'CAR' && carPackages.map(pack => <RidePackage key={pack.cost} pack={pack} />)
            }
            {
                rideType === 'BUS' && busPackages.map(pack => <RidePackage key={pack.cost} pack={pack} />)
            }
            {
                rideType === 'TRAIN' && trainPackages.map(pack => <RidePackage key={pack.cost} pack={pack} />)
            }
        </div>
    );
};

export default RidePackeges;