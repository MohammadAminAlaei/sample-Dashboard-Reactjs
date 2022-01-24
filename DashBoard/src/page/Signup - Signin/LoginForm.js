import React from 'react';
import './LoginForm.css';
import {Helmet} from "react-helmet";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            maskStyle: {
                left: 512,
                right: 0
            },
            username: '',
            password: '',
            email: '',
            localStorage: [],
            errors: {},
            emailSignin: '',
            passwordSignin: '',
            errorSignin: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.formValidation = this.formValidation.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.handleSingin = this.handleSingin.bind(this)
        this.signinChange = this.signinChange.bind(this)

        this.container = React.createRef()

        this.onSignIn = this.onSignIn.bind(this)
        this.onSignUp = this.onSignUp.bind(this)


    }


    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onSignUp() {
        this.container.current.classList.add("right-panel-active");
    }

    onSignIn() {
        // debugger
        this.container.current.classList.remove("right-panel-active");
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount() {
        let str = JSON.parse(localStorage.getItem('storage'));
        str === null ? str = [] : str = JSON.parse(localStorage.getItem('storage'))

        this.setState({localStorage: str})
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('storage', JSON.stringify(this.state.localStorage))
    }


    formValidation = () => {
        const {username, password, email} = this.state;
        let isValid = true;
        const errors = {};
        if (username.trim().length < 6) {
            errors.username = 'Username must be of Length 6 or higher'
            isValid = false;
        }
        if (!email.trim().includes('@') || !email.includes('.')) {
            errors.email = 'Please Inter Valid Email'
            isValid = false;
        }

        if (password.trim().length < 8) {
            errors.password = 'Password must be of Length 8 or higher'
            isValid = false;
        }
        this.setState({errors});
        return isValid

    }

    onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.formValidation();
        if (isValid) {
            let myObj = {}
            myObj.username = this.state.username;
            myObj.password = this.state.password;
            myObj.email = this.state.email;
            this.setState({localStorage: [...this.state.localStorage, myObj]})
            console.log(this.state)

            alert('You Register');
            this.setState({username: "", password: "", email: ""})
        }
    }

    signinChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSingin = (e) => {
        e.preventDefault();
        let storage = JSON.parse(localStorage.getItem('storage'))
        console.log(storage)

        let isValid = false;
        console.log(typeof storage)

        storage.forEach(item => {
            if ((item.email === this.state.emailSignin) && (item.password === this.state.passwordSignin)) {
                isValid = true;
            }
        })

        if (isValid === true) {
            this.props.navigate('/dashboard');
            localStorage.setItem('IS_LOGGED_IN', 'true');
            this.setState({emailSignin: '', passwordSignin: '', errorSignin: false})
        } else {
            this.setState({errorSignin: true})
        }
    }

    render() {
        const {username, email, password, emailSignin, passwordSignin} = this.state;
        const clipValue = `inset(0 ${this.state.maskStyle.left}px 0 ${this.state.maskStyle.right}px)`;
        console.log(this.props)

        console.log(History)

        return (
            <>
                <Helmet>
                    <title> Diprella | Sign in </title>
                </Helmet>
                <div className="container" id="container" ref={this.container}>
                    <div className="form-container sign-up-container">
                        <form onSubmit={this.onSubmit}>
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social">
                                    <i className="fab fa-facebook-f"/>
                                </a>
                                <a href="#" className="social">

                                    <i className="fab fa-google-plus-g"/>
                                </a>
                                <a href="#" className="social">
                                    <i className="fab fa-linkedin-in"/>
                                </a>
                            </div>
                            <span>or use your email for registration</span>
                            <input required type="text" placeholder="&#xf007;  Name" name='username' value={username}
                                   onChange={this.onChange}/>
                            <p style={{
                                color: 'red',
                                margin: '0',
                                fontSize: '10px',
                                textAlign: 'left'
                            }}> {this.state.errors.username} </p>
                            <input required type="email" placeholder="&#xf0e0;  Email" name='email' value={email}
                                   onChange={this.onChange}/>
                            <p style={{
                                color: 'red',
                                margin: '0',
                                fontSize: '10px',
                                textAlign: 'left'
                            }}> {this.state.errors.email} </p>
                            <input required type="password" placeholder="&#xf023;  Password" name='password'
                                   value={password}
                                   onChange={this.onChange}/>
                            <p style={{
                                color: 'red',
                                margin: '8px 0',
                                fontSize: '10px',
                                textAlign: 'left'
                            }}> {this.state.errors.password} </p>
                            <button type="submit" onClick={this.onSignUp}>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form onSubmit={this.handleSingin}>
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"/></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"/></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"/></a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="&#xf0e0;  Email" value={emailSignin} name='emailSignin'
                                   onChange={this.signinChange}/>
                            {this.state.errorSignin && <p style={{
                                color: 'red',
                                margin: '8px 0',
                                fontSize: '10px',
                                textAlign: 'left'
                            }}> Please Enter Invalid Email </p>}
                            <input type="password" placeholder="&#xf023;  Password" value={passwordSignin}
                                   name='passwordSignin'
                                   onChange={this.signinChange}/>
                            {this.state.errorSignin && <p style={{
                                color: 'red',
                                margin: '8px 0',
                                fontSize: '10px',
                                textAlign: 'left'
                            }}> Please Enter Invalid Password </p>}
                            <a href="#">Forgot your password?</a>
                            <button type="submit" onClick={this.onSignIn}>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn" onClick={this.onSignIn}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp" onClick={this.onSignUp}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LoginForm