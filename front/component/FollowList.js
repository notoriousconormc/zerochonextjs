import React from 'react';
import PropTypes from 'prop-types';
import { List , Button , Card } from 'antd';
import {StopOutlined} from '@ant-design/icons'


const FollowList = ({header,data} ) => {    // 시간이없어서 직접 스타일을 넣었지만 스타일컴포넌트를 사용하던 유즈메모를사용하던 따로 빼줘야함 안그럼 리렌더링된다 
    return(
        <List
        style={{marginBottom:20}}
        grid={{gutter:4,xs:2,md:3}}    
        size="small"
        header={<div>{header}</div>}
        loadMore={<div style={{textAlign :'center',margin:'10px'}}><Button>more</Button></div>}
        bordered
        dataSource={data}
        renderItem={(item)=>(
            <List.Item style={{marginTop:20}}>
                <Card actions = {[<StopOutlined key="stop"/>]}>
                    <Card.Meta description = {item.nickname}/>
                </Card>
            </List.Item>
        )}
        />
    )
};

FollowList.propTypes = {
    header : PropTypes.string.isRequired,
    data : PropTypes.array.isRequired
}



export default FollowList;