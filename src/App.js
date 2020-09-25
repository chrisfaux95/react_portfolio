import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper'
import './App.css';

const hdir = '/react_portfolio/'

function App() {
    return (
        <Router>
            <Wrapper>
                <Navbar homeRouter={hdir} />
                <Switch>
                    <Route exact path={hdir} component={About} />
                    <Route exact path={hdir + "home"} component={About} />
                    <Route exact path={hdir + "portfolio"} component={Portfolio} />
                    <Route exact path={hdir + "contact"} component={Contact} />
                </Switch>
            </Wrapper>
            <Footer />
        </Router>
    );
}

export default App;
