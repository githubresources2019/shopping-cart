import React from "react";
import "./product.css";
import ProductDetails from "../product-details";
import AddToCart from "../add-to-cart";

const Product = props => {
  const { id, urls } = props.product;
  return (
    <div className="col-md-3 image-back-cover">

     <div className="product-wrapper">
      <div className="image-wrapper">
        <span className="image-center-helper"></span>
        <img
          alt="sample"
          className="img-responsive fit-image"
          key={id}
          src={urls.regular}
        ></img>
      </div>

      <ProductDetails {...props}></ProductDetails>
      <AddToCart item={props.product}></AddToCart>
    </div>

    </div>
  );
};

export default Product;
