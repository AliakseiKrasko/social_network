import React from 'react';
import logo from './copy.png';
import './App.css';  // если стили находятся в файле App.css


export function App() {
    return (
        <div>
            <header>
                <img src={logo} alt="Logo" className="logo"/>
            </header>
        </div>
    );
}
