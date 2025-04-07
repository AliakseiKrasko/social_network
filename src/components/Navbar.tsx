import './../App.css';
import React from 'react';

type Props = {

};
export const Navbar = (props: Props) => {
    return (
            <nav className="nav">
                <ul>
                    <li>Profile</li>
                    <li>Messages</li>
                    <li>News</li>
                    <li>Music</li>
                    <li>Settings</li>
                </ul>
            </nav>
    );
};