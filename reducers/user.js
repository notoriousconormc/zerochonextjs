

export const initialState = {  //원본 초기값
    user : {
     isLoggedIN : false,
     user: null,
     signUpData: {},
     loginData : {},
    },
    
 };

 export const loginAction = (data)=>{           //  action 데이터를 바꾸고 싶을때 값을 따로만들어둔다
    return {
        type :'LOG_IN',
        data,
    }
}

export const logoutAction = (data)=>{       
    return {
        type :'LOG_IN',
    }
}
 


 const reducer = ( state = initialState,action) =>{
    switch (action.type){
        case 'LOG_IN':
          return {
                ...state,
                isLoggedIn :true,
                 user:action.data,
        
          }
          case 'LOG_OUT':
            return {
                  ...state,
                  isLoggedIn :false,
                  user:null,
            }    
        default: 
        return state;
    }
 }

 export default reducer;