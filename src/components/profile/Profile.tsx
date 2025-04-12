import classes from './Profile.module.css';
import img from './../../wallhaven-4l76yq.png';
import React from 'react';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type Props = {};
export const Profile = (props: Props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts/>
        </div>
    );
};