import React from 'react';
import './add-to-cart.css';
import { connect } from 'react-redux';
import { addToCart, updateProductCount } from '../../actions';
class AddToCart extends React.Component {
  constructor(props) {
    super(props);
  }

  addProductToCart = item => {
    let existingCartItems = this.props.cart.cartProducts;
    let cartDetails;
    let productExistInCart = existingCartItems.filter(
      cartItems => cartItems.id == item.id
    );
    if (productExistInCart.length > 0) {
      cartDetails = { [item.id]: this.props.cart.cartCounts[item.id] + 1 };
    } else {
     // let updatedCartItems = [...existingCartItems, item];
      this.props.addToCart(item);
      cartDetails = { [item.id]: 1 };
    }
    this.props.updateCount(cartDetails);
  };

  increseProductCount(id){
    let previousCount = this.props.cart.cartCounts[id];
    (previousCount>0) && this.props.updateCount({[id]:(previousCount)+1});
  }

  decreaseProductCount(id){
    let previousCount = this.props.cart.cartCounts[id];
    (previousCount>0) && this.props.updateCount({[id]:(previousCount)-1});
  }

  getProductCount = id => {
    return this.props.cart.cartCounts[id] ? this.props.cart.cartCounts[id] : 0;
  };

  render() {
    return (
      <div className="col-md-12 mt-1 mb-1 add-to-cart">
        {this.getProductCount(this.props.item.id)<=0?(<button
          className="btn btn-primary mx-auto d-block"
          onClick={() => this.addProductToCart(this.props.item)}
        >
          Add to Cart
        </button>):
        (<div className="row pl-1 pr-1 product-text">
          <button className="btn btn-primary" onClick={() => this.decreaseProductCount(this.props.item.id)} >-</button>
          <div className="col">
            {this.getProductCount(this.props.item.id) + " items in cart"}
          </div>
          <button className="btn btn-primary" onClick={() => this.increseProductCount(this.props.item.id)} >+</button>
        </div>)}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return state;
}

const mapDispatchToprops = {
    addToCart,
    updateCount:updateProductCount
}

export default connect(mapStateToProps,mapDispatchToprops)(AddToCart);