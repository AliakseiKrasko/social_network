import classes from './Profile.module.css';
import img from './../../wallhaven-4l76yq.png';
import React from 'react';
import {MyPosts} from './myPosts/MyPosts';

type Props = {};
export const Profile = (props: Props) => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.fon} src={img}/>
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts/>
        </div>
    );
};