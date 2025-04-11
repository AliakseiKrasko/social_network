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
            <div>
                My posts
                <div className={classes.posts}>
                    <Input value={textValue} onChange={handleInputChange} as="textarea" />
                    <Button as='button' title={'Add'}/>
                </div>
                <Post message={'Hi, how are you'} likes={15} />
                <Post message={'Hello'} likes={40} />
                <Post message={'Hi, my name is Alex'} likes={34} />
            </div>
        </div>
    );
};