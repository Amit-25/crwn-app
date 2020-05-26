import React from 'react';

import CustomButton from '../../component/custom-button/custom-button.component';
import '../../styles/cart-dropdown/cart-dropdown.styles.scss';

 const CartDropDown = () => (
   <div className='cart-dropdown'>
    <div className='cart-items'/>

    <CustomButton >GO TO CHECKOUT</CustomButton>
   </div>
 )

 export default CartDropDown;
