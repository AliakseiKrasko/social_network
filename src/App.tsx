import React from 'react';
import './App.css';



function App() {
    return (
        <div>
            <Header />
            <Technologies />
        </div>
    );
}

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>js</li>
                <li>html</li>
                <li>css</li>
                <li>react</li>
            </ul>
        </div>
    );
};

const Header = () => {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
        </div>
    )
}


export default App;
