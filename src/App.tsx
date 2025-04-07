import React from 'react';
import logo from './copy.png';
import img from './wallhaven-4l76yq.png';
import './App.css';


export function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src={logo} alt="Logo" className="logo"/>
            </header>
            <nav className="nav">
                <ul>
                    <li>Profile</li>
                    <li>Messages</li>
                    <li>News</li>
                    <li>Music</li>
                    <li>Settings</li>
                </ul>
            </nav>
            <div className="content">
                <div>
                    <img className="foto-main" src={img}/>
                </div>
                <div>
                    ava + discription
                </div>
                <div>
                    My posts
                    <div>
                        New Posts
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
