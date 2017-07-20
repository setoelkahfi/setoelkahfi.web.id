import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Cv from './Cv';
import Contact from './Contact';

const mainStyle = {
    minHeight: 500,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    color: '#fff',
    font: '11pt "Helvetica Neue", "Helvetica", Arial, sans-serif',
};

const Main = () => (
    <main style={mainStyle}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/cv' component={Cv} />
            <Route path='/contact' component={Contact} />
        </Switch>
    </main>
);

export default Main;