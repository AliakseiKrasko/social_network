import logo from '../copy.png';
import React from 'react';
import './../App.css';


type Props = {

};
export const Header = (props: Props) => {
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo"/>
        </div>
    );
};