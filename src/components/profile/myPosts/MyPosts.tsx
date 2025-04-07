import classes from './MyPosts.module.css';
import React from 'react';
import {Post} from './Post/Post';

type Props = {};
export const MyPosts = (props: Props) => {
    return (
        <div>
            <div>
                My posts
                <div className={classes.posts}>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};