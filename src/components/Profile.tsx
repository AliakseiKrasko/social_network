import classes from './Profile.module.css';
import img from '../wallhaven-4l76yq.png';
import React from 'react';

type Props = {

};
export const Profile = (props: Props) => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.fon} src={img}/>
            </div>
            <div>
                ava + discription
            </div>
            <div>
                My posts
                <div>
                    New Posts
                </div>
                <div className='posts'>
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    );
};