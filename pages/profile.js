import React from 'react';
import AppLayout from "../front/component/AppLayout";
import Head from 'next/head';
import NicknameEditForm from '../front/component/NicknameEditForm';
import FollowList from '../front/component/FollowList';



const Profile = () => {
    const followerList = [{nickname : 'nanoom'}, {nickname : 'foolish'}];
    const followingList = [{nickname : 'nanoom2'}, {nickname : 'foolish2'}];

    return(
        <>
        <Head><title>my profile</title></Head>
        <AppLayout>
            <NicknameEditForm />
            <FollowList header = "" data = {followingList}/>
            <FollowList header = "" data = {followerList}/>
        </AppLayout>
        </>
    )    
}
export default Profile;