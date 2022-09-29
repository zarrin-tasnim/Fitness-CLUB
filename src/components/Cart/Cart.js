import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { activity, handleClick } = props;
    const { name, img, timing } = activity;
    // console.log(props);


    return (
        <div className='activity-card'>
            <img src={img} alt="" srcset="" />
            <div className="activity-info">
                <p className='activity-name'>{name}</p>
                {/* <p>{p-details}</p> */}
                <p>Timing : {timing} seconds</p>
            </div>
            <button onClick={() => handleClick(props.activity)} className='cart-btn'>
                <p className='btn-text'>Add To List</p>
            </button>
        </div>
    );
};

export default Cart;