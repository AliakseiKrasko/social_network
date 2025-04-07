import classes from './Navbar.module.css';
import React from 'react';

type Props = {

};
export const Navbar = (props: Props) => {
    return (
            <nav className={classes.nav}>
                <ul className={classes.item}>
                    <li>Profile</li>
                    <li className={`${classes.item} ${classes.active}`}>Messages</li>
                    <li>News</li>
                    <li>Music</li>
                    <li>Settings</li>
                </ul>
            </nav>
    );
};