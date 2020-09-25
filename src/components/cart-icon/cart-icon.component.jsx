import React from "react";

import { connect } from 'react-redux';

import { toggleCardHidden } from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import './cart-incon.styles.scss';


const CartIcon = ({toggleCardHidden, itemCount}) => (
    <div className={'cart-icon'} onClick={toggleCardHidden}>
        <ShoppingIcon className={'shopping-icon'} />
        <span className={'item-count'}>{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
});

const mapStateToProps = ({ cardRedux: {cardItems}}) => ({
    itemCount: cardItems.reduce(
        (accumalatedQuantity, cartItem) => (accumalatedQuantity + cartItem.quantity), 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);