import React from 'react'
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
// Redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {toogleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from "../../redux/cart/cart.selector";
// Styles
import './cart-icon.styles.scss'

const CartIcon = ({toogleCartHidden, count}) => (
    <div className='cart-icon' onClick={toogleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{count}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    count: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
