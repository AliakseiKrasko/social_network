import classes from './Post.module.css';
import React, {useState} from 'react';

type Props = {
    id: string
    message: string
    likes: number
};

export const Post = ( {message, likes, id}: Props) => {
    const [countLike, setCountLike] = useState(0)

    const increaseCounnterHundler = () => {
        setCountLike(countLike + 1)
    }
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvJvP9yGgZ9GPbRw9YkBPbOKDfH59iea3rg&s'}/>
                { message }
                <div>
                      <span onClick={increaseCounnterHundler}>Like {countLike}</span>
                </div>

            </div>
        </div>
    );
};