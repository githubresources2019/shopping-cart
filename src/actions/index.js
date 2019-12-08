import unsplashApi from "../api/unsplash";

export const ProductListChange =(payload)=> {
    return{
        type:'PRODUCT_LIST_CHANGE',
        payload:payload
    }
};

export const addToCart = (payload) => {
    return{
        type:'ADD_TO_CART',
        payload:payload
    }
}

export const updateProductCount = (payload) => {
    return{
        type:'UPDATE_PRODUCT_COUNT',
        payload:payload
    }
}

export const login = (status) =>{
    return {
        type: 'LOGIN_SUCCESS',
        status: status
    }
}


export const removeProduct = (payload) => {
    return{
        type:'REMOVE_PRODUCT',
        payload:payload
    }
}

export const thunkActionCreator = (searchString,count) => async (dispatch) =>{
   try{
    const searchResults = await unsplashApi.get("/search/photos", {
          params: {
            query: searchString,
            per_page:count
          }
        });
    dispatch(ProductListChange(searchResults.data.results));
    }catch(error){
      console.log(error);
    }
}