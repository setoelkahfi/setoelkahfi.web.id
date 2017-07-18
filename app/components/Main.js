import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Cv from './Cv';
import Contact from './Contact';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/cv' component={Cv} />
            <Route path='/contact' component={Contact} />
        </Switch>
    </main>
);

export default Main;