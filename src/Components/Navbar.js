import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const amount = useSelector(state => state.amount)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Redux App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <button disabled={true} className='btn-primary justify-content-end'>Your Balance : {amount}</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;