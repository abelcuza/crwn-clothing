import React from 'react'
import {withRouter} from "react-router-dom";
// Custom components
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item'
// Redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selector";
import {toogleCartHidden} from "../../redux/cart/cart.actions";
// Styles
import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems, history, toogleCartHidden}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {history.push('/checkout'); toogleCartHidden()}} inverted>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));

