import React from 'react';
import {connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../../component/cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';
import {ReactComponent as Logo } from '../../assest/crown.svg';
import '../../styles/header/header.styles.scss';

const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
       <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {
        currentUser 
           ? 
        <div className='option' onClick={() => auth.signOut() }> SIGN OUT</div> 
           : 
        <Link className='option' to='/signIn'>SignIn</Link>
      }
      <CartIcon />
    </div>
    {  hidden ? null : <CartDropDown /> 
    }
  </div>
);

const mapStateToProps = ({user: { currentUser }, cart: {hidden} }) => ({
  
  currentUser,

  //hidden is defined in cart reducers;
  hidden
});

export default connect(mapStateToProps)(Header);