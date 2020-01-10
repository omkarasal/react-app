import React from 'react';
import './Input.css';

const Input = (props) => {
    let inputElement = null;
    let errorMessage = '';
    let inputClasses = ['form-control']

    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('invalid');
        errorMessage = <div className="alert alert-danger" role="alert">
                            Please enter a valid value!
                        </div>
    }

    switch(props.elementType){
        case ('input'):
            inputElement = (
                <input className={inputClasses.join(' ')} 
                    {...props.elementConfig} name={props.name} 
                    value={props.value} onChange={props.changed} />
                )
            break;
        case ('textarea'):
            inputElement = (
                <textarea className={inputClasses.join(' ')} 
                    {...props.elementConfig} name={props.name} 
                    value={props.value} onChange={props.changed} />
                )
            break;
        case ('select'):
            inputElement = (
                <select className={inputClasses.join(' ')} 
                    name={props.name} value={props.value} 
                    onChange={props.changed}>
                    {
                        props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))
                    }
                </select>
            )
            break;
        default:
            inputElement = (
                <input className={inputClasses.join(' ')} 
                    {...props.elementConfig} name={props.name} 
                    value={props.value} onChange={props.changed} />
                )
            break;
    }

    return(
        <div className="form-group">
            <label htmlFor={props.name}>{props.elementConfig.label}</label>
            { inputElement }
            { errorMessage }
        </div>
    )
}

export default Input;