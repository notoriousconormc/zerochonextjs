import React, { useState } from "react";
import PropTypes from 'prop-types';
import Link from 'next/link'
import {Menu, Input, Row, Col} from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from "styled-components";
import { useSelector } from "react-redux";









const SearchInput = styled(Input.Search)`
    vertical-align:middle; `

const AppLayout = () => {
    const isLoggedIn = useSelector((state)=> state.user.isLoggedIn);
    // const isLoggedIn:boolean = useSelector((state)=> state.user.isLoggedIn)                                // 리덕스사용
    //const [isLoggedIn , setIsLoggedIn] = useState(false);     //useState로 로그인 구축 
    

    
    return(
        <div> 
            <Menu mode="horizontal"> 
     
        <div>
        <Menu.Item><Link href="/"><a>nodebird</a></Link></Menu.Item>
        <Menu.Item><Link href="/profile"><a>profile</a></Link></Menu.Item>
        <Menu.Item><Link href="/signup"><a>signup</a></Link></Menu.Item>
        <Menu.Item><SearchInput enterButton ></SearchInput></Menu.Item>
        </div>
        </Menu>
        <Row gutter={8}>
            <Col xs ={24} md = {6} >{isLoggedIn ? <UserProfile /> : <LoginForm/>  }</Col>     
            {/* isLoggIn이 돠어있으면 프로필보여주기 아니면 로그인폼 보여주기 */}
            <Col xs ={24} md = {12} >회원가입</Col>                                             
            <Col xs ={24} md = {6} > <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener">made by zeroCho</a></Col>
        </Row>
        {/* {children} */}
        </div>
    //    
    )

};

// AppLayout.propTypes = {
//     children: PropTypes.node.isRequired,
// };
export default AppLayout