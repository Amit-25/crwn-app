import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assest/shopping-bag.svg';
import  { connect }  from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import '../../styles/cart-icon/cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count' >0</span>
    
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null,mapDispatchToProps)(CartIcon);