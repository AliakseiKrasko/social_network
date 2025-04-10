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
                <Post message={'Hi, how are you'} likes={15} />
                <Post message={'Hello'} likes={40} />
                <Post message={'Hi, my name is Alex'} likes={34} />
            </div>
        </div>
    );
};