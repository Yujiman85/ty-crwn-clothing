import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: '',
                password: ''
            })
        } catch(error) {
            console.log(error);
        }

        
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

                <div className='buttons'>
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton type="button"onClick={SignInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>    
                </div>
                   
               </form>
            </div>
        )
    }
}

export default SignIn;