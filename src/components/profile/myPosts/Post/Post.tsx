import classes from './Post.module.css';
import React from 'react';

type Props = {
    message: string
};

export const Post = ( {message}: Props) => {
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvJvP9yGgZ9GPbRw9YkBPbOKDfH59iea3rg&s'}/>
                {message}
                <div>
                    <span>like</span>
                </div>

            </div>
        </div>
    );
};