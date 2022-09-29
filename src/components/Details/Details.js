import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import './Details.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = (props) => {
    const [brk = 0, setBrk] = useState([]);
    const { detail, handleBtn } = props;

    console.log(detail);
    let totalTiming = 0;

    for (const details of detail) {

        totalTiming = totalTiming + details.timing;
    }

    const notify = () => toast("Congratulations!");

    const addTime = () => {
        const second = document.getElementById('btn1').innerText;
        console.log(second);
        const cart2 = {};
        let time;
        cart2['time'] = second;
        localStorage.setItem('time', JSON.stringify(cart2));
    }
    const addTime20 = () => {
        const second = document.getElementById('btn2').innerText;
        console.log(second);
        const cart2 = {};
        let time;
        cart2['time'] = second;
        localStorage.setItem('time', JSON.stringify(cart2));
    }
    const addTime30 = () => {
        const second = document.getElementById('btn3').innerText;
        console.log(second);
        const cart2 = {};
        let time;
        cart2['time'] = second;
        localStorage.setItem('time', JSON.stringify(cart2));
    }
    const addTime40 = () => {
        const second = document.getElementById('btn4').innerText;
        console.log(second);

        const cart2 = {};
        let time;
        cart2['time'] = second;
        localStorage.setItem('time', JSON.stringify(cart2));
    }
    const addTime50 = () => {
        const second = document.getElementById('btn5').innerText;
        const cart2 = {};
        let time;
        cart2['time'] = second;
        localStorage.setItem('time', JSON.stringify(cart2));
    }

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
                    <button id='btn1' onClick={() => addTime(setBrk(10))}>10s</button>
                    <button id='btn2' onClick={() => addTime20(setBrk(20))}>20s</button>
                    <button id='btn3' onClick={() => {

                        addTime30(setBrk(30));
                    }}>30s</button>
                    <button id='btn4' onClick={() => addTime40(setBrk(40))}>40s</button>
                    <button id='btn5' onClick={() => addTime50(setBrk(50))}>50s</button>
                </div>
            </div>
            <div className="exercise-details">
                <h1>Exercise Details</h1>
                <div className="total-time">
                    <p>Exercise Time: {totalTiming}</p>

                </div>
                <div className="breakTime">
                    <p>Break Time</p>
                    <p id='brkTimeee'>{brk}</p>
                </div>
            </div>
            <button className='complteBtn' onClick={notify}>Activity Completed</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Details;