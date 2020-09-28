import React from 'react';
import {Link} from 'react-router-dom'
// Custom components
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
// Firebase
import {auth} from "../../firebase/firebase.utils";
// Redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectCartHidden} from "../../redux/cart/cart.selector";
// Styles
import './header.styles.scss'

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {/* Disable and redirect '/signin' to '/' if the user is logged */}
            {
                currentUser ?
                    (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
                    :
                    (<Link to='/signIn' className='option'>SIGN IN</Link>)
            }
            <CartIcon/>
        </div>

        {/* Cart Dropdown toggle */}
        {hidden ? null : (<CartDropdown/>)}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
