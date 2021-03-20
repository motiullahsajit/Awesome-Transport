import React from 'react';

const Contact = () => {
    return (
        <div className="container mt-5">
            <h1 className='text-warning text-center my-2'>Contact Us</h1>
            <div className="col-lg-4 col-md-5 col-sm-12 mx-auto">
                <from className='from'>
                    <input type="text" placeholder='Your Name' className="form-control my-1 py-4" required />
                    <input type="email" placeholder='Your Email' className="form-control my-1 py-4" required />
                    <textarea name="meassage" className='w-100 my-1 form-control py-4'  placeholder='Your meassage'></textarea>
                    <button type='submit' className='btn btn-warning text-white w-100'>Submit</button>
                </from>
            </div>
        </div>
    );
};

export default Contact;