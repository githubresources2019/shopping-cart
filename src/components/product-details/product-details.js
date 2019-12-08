import React from 'react';
import './product-details.css';

class ProductDetails extends React.Component{

    constructor(props){
        super(props);
    }

    sentenceCase = (str) =>{
        return str.replace(/[a-z]/i, function (letter) {
            return letter.toUpperCase();
      }).trim();
    }

    render(){
        return <div className="product-details">{this.sentenceCase(this.props.product.tags[0].title)}</div>
    }
}

export default ProductDetails;