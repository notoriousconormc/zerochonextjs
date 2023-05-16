import React from 'react';
import PropTypes from 'prop-types';
// import 'antd/dist/antd.css';
import Head from 'next/head';
import wrapper from '../store/configureStore';


const NodeBird = ({Component}) => {
    return (
        // 원래 리덕스쓰려면 provider로 감싸줘야하는데 넥스트랑같이사용하면 감쌀필요없음 
        <>   
        <Head>
            <meta charSet="utf-8"/>
            <title>NodeBird</title>
        </Head>
        <Component/>
        </>
    )
};
NodeBird.propTypes = {
    Component:PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird); 