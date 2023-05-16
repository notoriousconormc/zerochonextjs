import React, { useCallback } from 'react';
import {Card, Avatar, Button } from 'antd';

import { useDispatch } from 'react-redux';
import { logoutAction } from '../../reducers/user';
 


const UserProfile = () => {
    const dispatch = useDispatch();

    const onLogOut = useCallback(()=>{
        dispatch(logoutAction());
    },[])
    return (
        <Card actions ={[
            <div key="twit">1<br/>0</div>,
            <div key="followings">1<br/>0</div>,
            <div key="twit">1<br/>0</div>
        ]}>
            {/* 리액트에서 배열로js사용할때 [] key를 붙여줘야함  */}
            <Card.Meta 
            avatar={<Avatar>ZC</Avatar>}
            title = "ZeroCho"
            />
            <Button onClick={onLogOut}>Log out</Button>
        </Card>
    )
} 

export default UserProfile; 