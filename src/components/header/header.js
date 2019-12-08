import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import "./header.css";

let isLoggedIn = false;

class Header extends React.Component {
    
  checkout = () => {
    this.props.history.push("checkout");
  };

  getTotalProductCount = () =>{
      let count = 0;
      Object.getOwnPropertyNames(this.props.cart.cartCounts).forEach(key => {
        count+= this.props.cart.cartCounts[key];
      });
      return count;
  }

  constructor(props){
      super(props);
      isLoggedIn = this.props.location.pathname !=='/login';
  }

  componentDidUpdate(){
      console.log('UPDATED');
      isLoggedIn = this.props.location.pathname !=='/login';
  }

  render() {      
    
    return (
      <div className="row header">
          <div className="col-md-11" >
        <h3>Shopping Cart</h3></div>
        {isLoggedIn && <div className="col-md-1" >
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>{` ${this.getTotalProductCount()} Items`}</span>
        </div>}
      </div>
    );
  }
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(withRouter(Header));
