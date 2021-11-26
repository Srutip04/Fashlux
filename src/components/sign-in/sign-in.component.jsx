import { render } from "@testing-library/react";
import react ,{Component} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
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
                    <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} label='email' required />
                    
                    <FormInput name='password' type='password' value={this.state.password} onChange={this.handleChange} label='password' required />
                  
                    <CustomButton type='submit'  >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>{' '}Sign In with Google {' '}</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;