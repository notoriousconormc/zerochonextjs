import React, { useCallback, useState } from 'react';
import AppLayout from "../front/component/AppLayout";
import { From,Input,Checkbox,Button } from 'antd';
import Head from 'next/head';
import useInput from '../front/component/hooks/useInput';
import styled from 'styled-components';

const ErrorMessage = styled.div`
color:red`;


const signup = () => {
    const [id,onChangeId] =useInput('');
    const [nickname,onChangeNickname] = useInput('');
    const [password, onChangePassword]= useInput('');

    const [passwordCheck,setPasswordCheck] = useState('');
    const [passwordError,setPasswordError]= useState(false);
    const onChangePasswordCheck = useCallback((e)=> {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);
    
    const [term,setTerm] = useState('');
    const [termError,setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    },[]);

    const onSubmit = useCallback(()=>{
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(id,nickname,password)
    },[password, passwordCheck, term]);
    
    return (
    <AppLayout>
        <Head>
            <title>
            sign
            </title>
            </Head>
    <Form onFinish = {onSubmit}>
        <div>
            <label htmlFor="user-id">id</label>
            <br />
            <Input htmlFor="user-id" value = {id} required onChange = {onChangeId} />
        </div>
        <div>
            <label htmlFor="user-id">id</label>
            <br />
            <Input htmlFor="user-id" value = {nickname} required onChange = {onChangeNickname} />
        </div>
        <div>
            <label htmlFor="user-id">id</label>
            <br />
            <Input htmlFor="user-id" value = {password} required onChange = {onChangePassword} />
        </div>
        <div>
        <label htmlFor="user-password-check">password check</label>
        <br />
        <input 
        name="user-password-check"
        type="password"
        value={passwordCheck}
        required
        onChange={onChangePasswordCheck}
        />
        {passwordError && <ErrorMessage>wrong password</ErrorMessage>}
        </div>
        <div>
            <Checkbox name= "user-term" checked={term} onChange={onChangeTerm}>zeroCho</Checkbox>
            {termError && <ErrorMessage> agree</ErrorMessage>}
        </div>
        <div style={{marginTop:10}}>
            <Button type="primary" htmlType="submit">sign</Button>
        </div>
    </Form>
    </AppLayout>
    )
}

export default signup;