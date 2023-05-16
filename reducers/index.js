import { HYDRATE } from "next-redux-wrapper";

import user from './user';
import post from './post';
import { combineReducers } from "redux";





const changeNickname2 =(data) => {    //  action 데이터를 바꾸고 싶을때 
    return {
        type : 'CHANGE_NICKNAME',
        data,
    }
};

//  action 데이터를 바꾸고 싶을때 
// const changeNickname = {    
//     type : 'CHANGE_NICKNAME',
//     data : 'boogicho',
// }

                            //( 이전상태   , 액션)   => 다음상태
const rootReducer = combineReducers({

index: (state = {} , action )=>{    // 서버사이드렌더링을 위해서 이부분추가해줌 
            switch ( action.type){
                case HYDRATE:
            return{ ...state, ...action.payload };
            default:
              return state;

            }
               },
user,
post,
});

export default rootReducer;