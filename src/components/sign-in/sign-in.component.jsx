import { render } from "@testing-library/react";
import react ,{Component} from "react";

import './sign-in.styles.scss';


class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''

        }
    }

    handleSubmit = Event =>{
        Event.preventDefault();

        this.setState({email: '',password: ''})

    }
    handleChange = Event =>{
        const {value,name} = Event.target;
        this.setState({[name]: value})
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input name='email' type='email' onChange={this.handleChange} value={this.state.email} required />
                    <label>Email</label>
                    <input name='password' type='password' value={this.state.password} onChange={this.handleChange} required />
                    <label>Password</label>
                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        );
    }
}

export default SignIn;