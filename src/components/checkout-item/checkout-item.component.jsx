import React from 'react'
//Styles
import './checkout-item.styles.scss'

const CheckoutItem = ({item: {name, imageUrl, price, quantity}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
);

// const MapDispatchToProps = dispatch => ({
//     removeCartItem: dispatch(removeCartItem())
// })
export default CheckoutItem
