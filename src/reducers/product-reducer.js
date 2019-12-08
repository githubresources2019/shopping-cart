
const ProductReducer = (state=[], action) =>{
    //console.log(action)
    if(action.type=='PRODUCT_LIST_CHANGE'){
        return action.payload;
    }
    return state;
}

export default ProductReducer;
