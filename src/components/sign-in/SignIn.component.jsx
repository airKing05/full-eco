import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utilities';
import CustomBtn from '../custom-btn/CustomBtn.component';
import FormInput from '../from-input/FormInput.component';
import './sign-in.style.css';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    };
    handleChange = (event) => {
        const { name, value } = event.target;
         this.setState({ [name]: value })
         console.log(event.target.value)
    }
    handleSubmit(event) {
        event.preventDefault();
    };

    render() {
        return (
            <div className='col sign-in' >
                <h3>Have a Account</h3>
                <span>Sign In with Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label="email"
                        defaultValue={this.state.email}
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        type="password"
                        name="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />
                    <CustomBtn  type='submit' >Sign In</CustomBtn>
                   

                </form>
                <CustomBtn onClick={signInWithGoogle}>SignIn with Google</CustomBtn>
            </div>
        )
    }
}
