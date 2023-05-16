import React, { useMemo } from 'react';
import { Form , Input } from 'antd';
 

const NicknameEditForm = () => {
    const style = useMemo(()=> ({marginBottom: '20px', border : '1px solid black', padding : '10px' }))
    return(
        <Form style={style}>
            <Input.Search addonBefore="nickname" enterButton="edit" />
        </Form>
    )
};


export default NicknameEditForm;