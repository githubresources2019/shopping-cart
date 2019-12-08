import React from 'react';
import './login-style.css';
import { withRouter } from 'react-router-dom';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userName:"",
            password:""
        }
    }

    login($event){

        const {userName, password} = this.state;
        $event.preventDefault();
        if(userName=="admin" && password=="admin"){
            this.props.history.push('/profile')
        }
    }

    updateUserName=($event)=> {
         this.setState({userName:$event.target.value})
    }

    updatePassword=($event)=> {
        this.setState({password:$event.target.value})
     }

    render(){
        return(
            <div className="wrapper">
                <form onSubmit={($event)=>this.login($event)} className="form-signin">       
                <h2 className="form-signin-heading">Please login</h2>
                <input type="text" className="form-control" onChange={($event)=>this.updateUserName($event)} name="username" placeholder="Email Address" required="" autoFocus="" />
                <div className="error"></div>
                <input type="password" className="form-control" onChange={($event)=>this.updatePassword($event)} name="password" placeholder="Password" required=""/>      
                <div className="error"></div>
                <button className="btn btn-lg btn-primary btn-block" >Login</button>   
                </form>
            </div>
        )
    }
}

export default withRouter(Login);