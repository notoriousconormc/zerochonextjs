import { Form, Input, Button } from "antd";
import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// @type ignore
import { addPost } from "../../reducers/post";




const PostForm = () => {
    const {imagePath} = useSelector((state)=> state.post);
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const imageInput = useRef();
    const onChangeText = useCallback((e)=>{
        setText(e.target.value);
    },[])
    const obSubmit = useCallback(()=>{
        dispatch(addPost)
        setText('');
    },[])
    const onClickImageUpload = useCallback(()=>{
        imageInput.current.click();
    },[imageInput.current])

    return (
        <Form style={{margin:'10px'}} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea
            value = {text}
            onChange={onChangeText}
            maxLength={140}
            placeholder="hello"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput}/>
                <Button onClick={onClickImageUpload}>upload</Button>
                <Button type="primary" style={{float : 'right'}} htmlType= "sumbit">fuckfuck</Button>
            </div>
        <div>
            {imagePath.map((v)=>(
               <div key= {v} style={{display:'inline-block'}}>
                <img src = {v} style={{width:'200px'}} alt={v}/>
                <div>
                    <Button>erase</Button>
                </div>    
               </div>
               ))}
        </div>

        </Form>
    )
};

export default PostForm;