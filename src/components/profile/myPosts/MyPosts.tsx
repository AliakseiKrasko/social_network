import classes from './MyPosts.module.css';
import React, {useState} from 'react';
import {Post} from './Post/Post';
import {Button} from '../../Button/Button';
import {Input} from '../../Input/Input';

type Props = {};
export const MyPosts = (props: Props) => {
    const [textValue, setTextValue] = useState<string>("")
    const [postData, setPostData] = useState([
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Hello', likesCount: 11},
        {id: 3, message: 'Hi, my name is Alex', likesCount: 12},
    ])

    const handleInputChange = () => {

    }

    return (
        <div>
            <div className={classes.mypostsBlock}>
                <h3>My posts</h3>
                <div className={classes.posts}>
                    <div>
                        <Input value={textValue} onChange={handleInputChange} as="textarea"/>
                    </div>
                    <div>
                        <Button as='button' title={'Add post'}/>
                    </div>
                </div>
                {postData.map(m => {
                    return (
                        <Post message={m.message} likes={m.likesCount} />
                    )
                })}
            </div>
        </div>
    );
};