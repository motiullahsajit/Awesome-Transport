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
    const [bikePacks, setBikePacks] = useState([])
    const [carPacks, setCarPacks] = useState([])
    const [busPacks, setBusPacks] = useState([])
    const [trainPacks, settrainPacks] = useState([])
    useEffect(() => {
        setBikePacks(BikePackages)
        setCarPacks(CarPackages)
        setBusPacks(BusPackages)
        settrainPacks(TrainPackages)
    }, [])

    return (
        <div className='bg-light'>
            {
                rideType === 'BIKE' && bikePacks.map(pack => <RidePackage pack={pack} />)
            }
            {
                rideType === 'CAR' && carPacks.map(pack => <RidePackage pack={pack} />)
            }
            {
                rideType === 'BUS' && busPacks.map(pack => <RidePackage pack={pack} />)
            }
            {
                rideType === 'TRAIN' && trainPacks.map(pack => <RidePackage pack={pack} />)
            }
        </div>
    );
};

export default RidePackeges;