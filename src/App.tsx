import React from 'react';
import logo from './copy.png';
import './App.css';  // если стили находятся в файле App.css


export function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src={logo} alt="Logo" className="logo"/>
            </header>
            <nav className="nav">
                <div>Profile</div>
                <div>Messadge</div>
            </nav>
            <div className="content">Main content</div>
        </div>
    );
}
