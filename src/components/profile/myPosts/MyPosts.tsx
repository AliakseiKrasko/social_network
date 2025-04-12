import classes from './MyPosts.module.css';
import React, {useState} from 'react';
import {Post} from './Post/Post';
import {Button} from '../../Button/Button';
import {Input} from '../../Input/Input';

type Props = {};
export const MyPosts = (props: Props) => {
    const [textValue, setTextValue] = useState<string>("")

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
                <Post message={'Hi, how are you'} likes={15}/>
                <Post message={'Hello'} likes={40}/>
                <Post message={'Hi, my name is Alex'} likes={34}/>
            </div>
        </div>
    );
};