import React from 'react';
import { Welcome } from './components/Welcome';
import { Albums } from './components/Albums';
import './style.css';

const App = () => {
    return (
        <>
            <Welcome />
            <Albums />
        </>
    )
};

export default App;