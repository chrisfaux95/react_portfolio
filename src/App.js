import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper'
import './App.css';

function App() {
    return (
        <Router>
            <Wrapper>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/home" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Wrapper>
            <Footer />
        </Router>
    );
}

export default App;
