import React from 'react';
import { connect } from 'react-redux';
import Product from '../product';

class ProductContainer extends React.Component{
    render(){
        return(<div className="row">{this.props.productList.map((product)=>{
                return <Product key={product.id} product={product} ></Product>
            }
        )}</div>)
    }
}


const mapStateToProps=(state)=>{
    return state;
}

export default connect(mapStateToProps)(ProductContainer);