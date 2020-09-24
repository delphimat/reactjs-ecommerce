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


        console.log("display state");
        console.log(this.state);

        const {displayName, email, password, confirmPassword} = this.state;

        console.log("toto");
        console.log(password);
        console.log(confirmPassword);

        if (password != confirmPassword) {
            alert("passords don't match");
            return;
        }


        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
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
                        value={this.state.password}
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