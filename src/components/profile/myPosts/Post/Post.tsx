import classes from './Post.module.css';
import React from 'react';
import heartImage from './../../../../heart.png';

type Props = {
    message: string
    likes: number
};

export const Post = ( {message, likes}: Props) => {
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvJvP9yGgZ9GPbRw9YkBPbOKDfH59iea3rg&s'}/>
                { message }
                <div>
                      <span>Like {likes}</span>
                </div>

            </div>
        </div>
    );
};