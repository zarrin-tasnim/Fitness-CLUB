import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import './Details.css';

const Details = () => {
   
    return (
        <div className='details'>
            <div className="my-info">
                <div className="info-img">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" srcset="" />
                </div>
                <div className="info-details">
                    <p>Zarrin Tasnim</p>
                    <div className="inf-location">
                        <span className='icon-info'><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon></span>
                        <p>Upashahar,Sylhet</p>
                    </div>
                </div>
            </div>
            <div className="my-info-weight">
                <div className=''>
                    <p className='nmbrs'>60<small>age</small></p>
                    <p>Weight</p>
                </div>
                <div>
                    <p className='nmbrs'>23<small>yrs</small></p>
                    <p>Age</p>
                </div>
                <div>
                    <p className='nmbrs'>5.2</p>
                    <p>Height</p>
                </div>
            </div>
            <div className="add-a-break">
                <h2>Add A Break</h2>
                <div className="break-time">
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>
            </div>
            <div className="exercise-details">
                <h1>Exercise Details</h1>
                <div className="total-time">
                    <p>Exercise Time</p>
                    <p></p>
                </div>
                <div className="breakTime">
                    <p>Break Time</p>
                    <p></p>
                </div>
            </div>
            <button className='complteBtn'>Activity Completed</button>
        </div>
    );
};

export default Details;