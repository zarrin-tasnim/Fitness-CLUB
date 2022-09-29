import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';
import Header from '../Header/Header';
import './Fitness.css';

const Fitness = () => {
    const [activity, setProducts] = useState([]);
    const [cart, setCarts] = useState([]);
    const [detail, setDetail] = useState([]);
    

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(activity);

    const handleClick = (activity) => {
        // console.log(activity);

        const newCart = [...detail, activity];
        setDetail(newCart);
    }

    return (
        <div className='fitness-container'>

            <div className="activity-container">

                {/* <h3>This is for activity : {activity.length}</h3> */}

                {
                    activity.map(activity => <Cart key={cart.id} activity={activity} handleClick={handleClick} >

                    </Cart>)
                }
            </div>
            <div className="details-container">
                <Details detail={detail} ></Details>
            </div>
            <div className="questionAns-container">
                <div className="q1">
                    <h3>How does react works?</h3>
                    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>
                </div>
                <div className="q1">
                    <h3>What are the difference between props and state?</h3>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                </div>
                <div className="q1">
                    <h3>What are the works of useEffect without using for api data load?</h3>
                    <p>fetching data, directly updating the DOM, and timers.</p>
                </div>
            </div>
        </div>
    );
};

export default Fitness;