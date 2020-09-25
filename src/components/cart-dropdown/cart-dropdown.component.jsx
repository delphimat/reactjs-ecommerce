import React from 'react';
import {connect } from 'react-redux';

import CustomButton from "../custom-buttom/custom-buttom.component";
import CartItem from "../cart-item/cart-item.component";

import './cart-dropdown.styles.scss';

const CartDropDown = ({cardItems}) => {

    return (
        <div className={'cart-dropdown'}>
            <div className={'cart-items'} >
                {cardItems.map(cartItem =>
                    (<CartItem key={cartItem.id} item={cartItem} />)
                )}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cardRedux: {cardItems}}) => ({
    cardItems
})

export default  connect(mapStateToProps)(CartDropDown);