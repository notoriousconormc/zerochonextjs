//redux 설치 npm i next-redux-wrapper    next랑함께사용하게끔 설치해서 기존리덕스랑 쫌 다름 

import {createWrapper} from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers'



const configureStore = () => {
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production'                                      // 히스토리가 쌓이는 이유 불변성을 지켜줬기때문이다 
    ? compose(applyMiddleware(...middlewares))                    //배포용 , 히스토리가 쌓이면 데이터도 많이잡아먹고 중앙데이터들이 어떻게 변하는지 다 보이기때문에 보안에 취약함(devtool)연결안함 
    : composeWithDevTools(applyMiddleware(...middlewares))    //개발용 웹이랑 연동시켜서 작업반응 DveTool이랑 연동시켜놓음       
    const store = createStore(reducer, enhancer);
    return store;
};
const wrapper = createWrapper(configureStore,{
    debug:process.env.NODE_ENV === 'development',   //기본셋팅  debug를 true로 설정해두면 좋다고함 뭔말인지 모르겟는데 
});

export default wrapper;