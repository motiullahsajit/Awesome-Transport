import React from 'react';
import notFound from '../../images/notFound.png'
const NotFound = () => {
    return (
        <div className='container'>
           <img src={notFound} className='w-100' alt=""/>
        </div>
    );
};

export default NotFound;