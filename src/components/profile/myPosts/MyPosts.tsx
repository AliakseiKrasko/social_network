import classes from './MyPosts.module.css';
import React, {useState} from 'react';
import {Post} from './Post/Post';
import {Button} from '../../Button/Button';
import {Input} from '../../Input/Input';
import {v1} from 'uuid';
/*
type Props = {
    id: string
    message: string
    likesCount: number
};*/
export const MyPosts = () => {
    const [textValue, setTextValue] = useState<string>("")
    const [postData, setPostData] = useState([
        {id: '1', message: 'Hi, how are you', likesCount: 12},
        {id: '2', message: 'Hello', likesCount: 11},
        {id: '3', message: 'Hi, my name is Alex', likesCount: 12},
    ])

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(e.currentTarget.value)
    }

    const handleAddPost = () => {
        if (textValue.trim() === "") return

        const newPost = {
            id: v1(),
            message: textValue,
            likesCount: 0
        }

        setPostData([newPost, ...postData])
        setTextValue("")
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
                        <Button as='button' title={'Add post'} onClick={handleAddPost}/>
                    </div>
                </div>
                {postData.map(m =>
                    <Post
                        key={m.id}
                        id={m.id}
                        message={m.message}
                        likes={m.likesCount}

                    />
                        )}
            </div>
        </div>
    );
};