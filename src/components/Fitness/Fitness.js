import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import './Fitness.css';

const Fitness = () => {
    const [activity, setProducts] = useState([]);
    const [cart, setCarts] = useState([]);

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(activity);
    return (
        <div className='fitness-container'>
           
            <div className="activity-container">

                {/* <h3>This is for activity : {activity.length}</h3> */}
              
                {
                    activity.map(activity => <Cart key={cart.id} activity={activity}>

                    </Cart>)
                }
            </div>
            <div className="details-container">
                <h1>hi</h1>
            </div>
        </div>
    );
};

export default Fitness;