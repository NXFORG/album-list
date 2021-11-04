import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import * as Pages from './pages';
import { Header } from './layout/Header/Header';
import { Home } from './pages/home';
import { NewAlbum } from './pages/new';
import './style.css';

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/new">
                    <NewAlbum />
                </Route>
                <Route>
                    <h1>Page doesn't exist</h1>
                </Route>
            </Switch>
        </>
    )
};

export default App;