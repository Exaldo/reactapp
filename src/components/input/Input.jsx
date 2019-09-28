import React from 'react'

const Input = (props) =>{
    const { type,name, onChange,value,className,maxLength,minLength,disabled} =props;
    return(
        <input
             type={type}
             name={name}
             onChange={onChange}
             value={value} 
             className={className}
             maxLength={maxLength}
             minLength={minLength}
             disabled={disabled}
             />
    )
}
Input.defaultProps = {
    disabled: false,
    minLength: '0',
    maxLength: '50',
    type: 'text',
    className: 'input'
};

export default Input;