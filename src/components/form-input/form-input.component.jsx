import React from "react";


import './form-input.styles.css'

const FormInput = ({handleChange, label, ...props}) => (
    <div className="group">
        <input className="form-input" {...props} onChange={handleChange} />
        {
            label ? <label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label> : null
        }
    </div>
)

export default FormInput;