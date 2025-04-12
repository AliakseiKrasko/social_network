import img from '../../../wallhaven-4l76yq.png';
import classes from './ProfileInfo.module.css';
import React from 'react';

type Props = {

};
export const ProfileInfo = (props: Props) => {
    return (
        <div>
            <div>
                <img className={classes.fon} src={img}/>
            </div>
            <div>
                ava + discription
            </div>
        </div>
    );
};