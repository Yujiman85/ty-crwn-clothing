import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';

import './SignIn.scss';

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                   <FormInput name='email' type='email' label='email' value={this.state.email} handleChange={this.handleChange} required />

                   <FormInput name='password' type='password' label='password' value={this.state.password} handleChange={this.handleChange} required />

                   <input type='submit' value='Submit Form' />
               </form>
            </div>
        )
    }
}

export default SignIn;