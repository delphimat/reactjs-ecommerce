import React from "react";

import './custom-buttom.styles.css'

const CustomButton = ({children, isGoogleSignIn, inverted,  ...otherProps}) => (
    <button
        className={`
        ${inverted ? 'inverted': ''} 
        ${isGoogleSignIn ? 'google-sign-in': ''} 
        custom-button`}
        type="submit" {...otherProps} >
        {children}
    </button>
)

export default CustomButton;