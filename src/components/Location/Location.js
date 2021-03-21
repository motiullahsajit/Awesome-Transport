import React, { useState } from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const location = {
    lat: 22.356852,
    lng: 91.783180
};

function Location({ origin, destination }) {
    const [directionResponse, setDirectionResponse] = useState()

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBMVyCkkealFbVMFmBABLVGeefjwF0h2SA"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
            >
                {
                    origin !== '' && destination !== '' && <DirectionsService
                        options={{
                            destination: destination,
                            origin: origin,
                            travelMode: 'DRIVING'
                        }}
                        callback={res => {
                            if (res !== null) {
                                setDirectionResponse(res)
                            }
                        }}
                    />
                }
                {
                    directionResponse && <DirectionsRenderer
                        options={{
                            directions: directionResponse
                        }}
                    />
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Location)