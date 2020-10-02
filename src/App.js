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
        <Router basename="/react_portfolio">
            <Wrapper>
                <Navbar/>
                <Switch>
                    <Route path="/">
                        <About />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                </Switch>
            </Wrapper>
            <Footer />
        </Router>
    );
}

export default App;
