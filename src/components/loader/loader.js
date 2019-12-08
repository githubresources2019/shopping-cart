import React from'react';
import './loader.css';
export default class Loader extends React.Component{
    render(){
        return(
            <div className="loader">
                <span className="helper"></span>
                <img src={'assets/images/loader.gif'} />      
            </div>
        )
    }
}