import React from 'react'
// Custom components
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item'
// Redux
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selector";
// Styles
import './cart-dropdown.styles.scss'

const CartDropdown = ({items}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {items.map(item => <CartItem key={item.id} item={item} />)}
        </div>
        <CustomButton inverted>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state =>({
    items: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);

