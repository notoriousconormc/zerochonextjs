import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from "../front/component/AppLayout";
import PostCard from '../front/component/PostCard';
import PostForm from '../front/component/PostForm';



const Home = () => {
    const {isLoggedIn} =useSelector((state)=>state.user);
    const mainPosts = useSelector((state)=>state.post.mainPosts)
    return (
        <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((post,index) => <PostCard key={post.id} post={post}/>)}           //key값에 index쓰지마 절대 
            <div>next</div>
            </AppLayout>
    );
}

export default Home;