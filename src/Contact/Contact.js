import React, { Component } from 'react';
import Input from '../UI/Input';
import classes from './Contact.css';

class Contact extends Component {
    state = {
        contactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    label: 'Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            gender: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'male', displayValue: 'Male' },
                        { value: 'female', displayValue: 'Female' }
                    ],
                    label: 'Gender'
                },
                value: 'male',
                validation: {},
                valid: true
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    label: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    label: 'Phone'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'textarea',
                    label: 'Message'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    }

    handleChange = (event, inputIdentifier) => {
        const updatedContactForm = { ...this.state.contactForm };
        const updatedElement = { ...updatedContactForm[inputIdentifier] };
        updatedElement.value = event.target.value;
        
        
        updatedElement.valid = this.checkValidity(updatedElement.value, updatedElement.validation);
        updatedElement.touched = true;
        updatedContactForm[inputIdentifier] = updatedElement;
        
        let isFormValid = true;
        for(let inputId in updatedContactForm){
            isFormValid = updatedContactForm[inputId].valid && isFormValid;
        }

        this.setState({
            contactForm: updatedContactForm,
            formIsValid: isFormValid
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = {};
        for(let element in this.state.contactForm){
            formData[element] = this.state.contactForm[element].value;
        }
        console.log(formData)
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if(!rules){
            return true;
        }

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length <= rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length >= rules.maxLength && isValid;
        }

        return isValid;
    }

    render(){
        let formElementsArray = [];
        for(let key in this.state.contactForm){
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            })
        }

        return(
            <section className="">
                <div className="contactForm">
                    <form onSubmit={this.handleSubmit}>
                        {
                            formElementsArray.map(element => (
                                <Input 
                                    key={element.id}
                                    name={element.id}
                                    elementType={element.config.elementType}
                                    elementConfig={element.config.elementConfig}
                                    value={element.config.value}
                                    changed={(event) => this.handleChange(event, element.id)}
                                    invalid={!element.config.valid}
                                    shouldValidate={element.config.validation} 
                                    touched={element.config.touched}/>
                            ))
                        }
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled={!this.state.formIsValid}>Submit</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact