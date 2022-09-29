import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const { activity, handleCLick } = props;
    const { name, img, timing } = activity;
    return (
        <div className='activity-card'>
            <img src={img} alt="" srcset="" />
            <div className="activity-info">
                <p className='activity-name'>{name}</p>
                {/* <p>{p-details}</p> */}
                <p>Timing : {timing} seconds</p>
            </div>
            <button className='cart-btn'>
                <p className='btn-text'>Add To List</p>
            </button>
        </div>
    );
};

export default Cart;