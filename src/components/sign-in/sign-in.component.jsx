import React, {Component} from 'react';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>   
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        required 
                        handleChange={this.handleChange}
                        label="email"
                    />
                    
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        required 
                        handleChange={this.handleChange}
                        label="password"
                    />  

                    <div className ='buttons'>
                        <CustomButton type = "submit">
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>

            </div>
        );
    }
};

export default SignIn;