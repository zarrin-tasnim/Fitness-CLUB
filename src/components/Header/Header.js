import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <div className="header">

                <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                <h1 className='header-title'>Fitness CLUB</h1>
            </div>
            <p className='title'>Select Today's Exercise</p>
        </div >
    );
};

export default Header;