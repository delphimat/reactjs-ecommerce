import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-buttom/custom-buttom.component";

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import './sign-up.styles.css';

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }


    handleSubmit = async e =>  {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;


        if (password !== confirmPassword) {
            alert("passords don't match");
            return;
        }


        try {
            console.log("______createUserWithEmailAndPassword");
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            console.log("_____createUserProfileDocument");
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error("____ERROR___ ");
            console.error(error);
        }

    };

    handleChange = e => {

        const { value, name } = e.target;

        this.setState({
            [name] : value,
        })
    }


    render() {

        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='test'
                        name={'displayName'}
                        value={displayName}
                        handleChange={this.handleChange}
                        label={'Display Name'}
                        required
                    />
                    <FormInput
                        type='email'
                        name={'email'}
                        value={email}
                        handleChange={this.handleChange}
                        label={'email'}
                        required
                    />

                    <FormInput
                        type="password"
                        handleChange={this.handleChange}
                        name="password"
                        value={password}
                        label={'Password'}
                        required />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label={'Confirm Password'}
                        required
                    />

                    <CustomButton type={'submit'} >SIGN UP</CustomButton>
                </form>
            </div>
        )
    }

}

export default Signup;