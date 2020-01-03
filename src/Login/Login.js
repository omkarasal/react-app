import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: 'admin',
            password: 'admin123'
        }

        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    componentDidMount(){
        this.usernameRef.current.focus();
    }

    handleSubmit = (e) =>{
        if(this.usernameRef.current.value === '' || this.passwordRef.current.value === ''){
            alert('Please enter username and password to login!');
            this.usernameRef.current.focus();
        }else if(this.usernameRef.current.value === this.state.username && this.passwordRef.current.value === this.state.password){
            localStorage.setItem('isLoggedIn', true);
            this.props.history.push('/home');
            //console.log(this.props)
        }else{
            alert('Please enter valid credentials to login!');
            this.usernameRef.current.focus();
        }
        e.preventDefault();
    }

    render(){
        return(
            <div className="loginForm">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" ref={this.usernameRef} className="form-control" id="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" ref={this.passwordRef} className="form-control" id="password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)