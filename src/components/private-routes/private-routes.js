import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({compoent:Component, loginStatus, ...rest}) =>(
   <Route {...rest} render={(props)=>(
     loginStatus ? <Component {...props} /> : <Redirect to='/login' ></Redirect>
   )}></Route>)

const mapStateToprops =(state)=> {
    return state;
}

export default connect(mapStateToprops)(PrivateRoutes);