import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-buttom/custom-buttom.component";

import './sign-in.styles.css';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            'email': '',
            'password': ''
        })
    }

    handleChange = e => {
        const { value, name } = e.target;

        console.log(name);

        this.setState({
            [name] : value,
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" handleChange={this.handleChange}  name="email" type="email" value={this.state.email} required />
                    <FormInput label="password"  handleChange={this.handleChange} name="password" value={this.state.password} required />
                    <CustomButton type="submit" value='Submit Form' >Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;