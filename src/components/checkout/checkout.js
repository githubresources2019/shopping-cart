import React from 'react';
import { connect } from 'react-redux';

class Checkout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="p-2 bg-light" >
                {this.props.cart.cartProducts.map((product)=>{
                   return (
                       <div key={product.id} className="row m-2" style={{'border-bottom':'2px solid red'}}>
                           <div className="col-md-3 p-2 text-center font-weight-bold">
                               <img style={{'width': '200px'}} src={product.urls.regular} />
                               <span>{product.tags[0].title}</span>
                           </div>
                           <div className="col-md-5 mt-4" >
                                <div><span className="font-weight-bold">Description :</span> {product.alt_description}</div>
                                <div><span className="font-weight-bold">Id :</span> {product.id}</div>
                           </div>
                           <div className="col-md-2 mt-4" >
                              <div >Quantity : 2</div>
                              <div >2*100 = 200</div>
                           </div>
                           <div className="col-md-2 mt-4" >
                              <button className="btn btn-danger">Delete</button>
                           </div>
                       </div>
                   )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return state;
}

export default connect(mapStateToProps)(Checkout)