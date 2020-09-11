import React from 'react'
import FormInput from '../from-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.error(error);
            if (error.code === 'auth/user-not-found'){
                alert('Wrong User')
            }
            if (error.code === 'auth/too-many-requests'){
                alert('Too many fails, try later')
            }
            if (error.code === 'auth/wrong-password'){
                alert('Wrong Password')
            }
            this.setState({ email: '', password: '' })
        }
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    };

    render() {
        return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' type='email' label='Email' value={this.state.email} required handleChange={this.handleChange}/>

                <FormInput name='password' type='password' label='Password' value={this.state.password} required handleChange={this.handleChange}/>

                <div className='buttons'>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
        );}
}

export default SignIn;
