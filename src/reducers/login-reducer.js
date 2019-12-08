

const LoginReducer = (state=false, action) =>{
    if(action.type=="LOGIN_SUCCESS"){
       return action.status;
    }
    return state;
}

export default LoginReducer;