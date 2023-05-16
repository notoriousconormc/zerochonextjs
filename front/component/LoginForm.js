import React, { useCallback, useMemo, useState } from 'react';
import {Form, Input, Button } from 'antd';
import Link from 'next/link';
import  styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from './hooks/useInput';

import { useDispatch } from 'react-redux';
import { loginAction } from '../../reducers/user';



const FormWrapper = styled.form`
padding:40px
`; 



const LoginForm = () => {
    const dispatch = useDispatch();
    const [id,onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('')
   
    const onSubmitForm = useCallback(()=>{
        console.log(id,password);
        dispatch(loginAction({id,password}));
    }, [id,password])


    const style = useMemo(()=>({marginTop : 10}),[]);     //div옆에 바로 스타일넣는경우가 있는데 그렇게 하면 절대 안됨 리렌더링해버림 인터넷느려짐 useMomo쓰던가 스타일컴포넌트쓰던가 

    return (
        <FormWrapper onFinish = {onSubmitForm}>
            {/* onFinish에는  e,prevent가 붙어있기때문에 따로 적을필요없다 */}
            <div>
                <label htmlFor="user-id">ID</label>
            </div>
            <div>
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>
            <div>
                <label htmlFor="user-password">password</label>
            </div>
            <div>
                <Input name= "user-password" type= "password" value={password} onChange={onChangePassword} required/>
            </div>
            <div style={style}>
                <Button type="primary" htmlType="submit" loading={false}>LOgin</Button>
                {/* button에  htmlType="submit"*/}
                <Link href="/singup"><a><Button>sign</Button></a></Link>
            </div>
        </FormWrapper>
    );
}


export default LoginForm;
 
/**  리렌더링 정리
 *   함수안이 다시실행되는건맞음 
 *   똑같은거면 바뀐게 없네하고 지나감
 *     바뀐부분만 리렌더링됨  
 *      그래서 만약에 <div style={style}>dgsdg</div>  이런식으로 직접 스타일을 주면 바뀐부분이라고 인식하고 계속 리렌더링해버림 성능저하됨 
 *                       {}   === {}    이게 다르다고 인식함 
 * 
 *  정리 이전 컴포넌트랑 달라진 부분만 리렌더링해줌 !!!!
 */