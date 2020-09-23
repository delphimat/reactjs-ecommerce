import React from "react";

import './custom-buttom.styles.css'

const CustomButton = ({children, ...otherProps}) => (
    <button type="submit"  {...otherProps} className='custom-button'>
        {children}
    </button>
)

export default CustomButton;