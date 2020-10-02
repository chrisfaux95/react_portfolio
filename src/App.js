import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper'
import './App.css';

function App() {
    return (
        <Router basename="/react_portfolio">
            <Wrapper>
                <Navbar />
                <Switch>
                    <Route
                        exact path="/"
                        render={() => <About />}
                    />
                    <Route
                        exact path="/portfolio"
                        render={() => <Portfolio />}
                    />

                </Switch>
            </Wrapper>
            <Footer />
        </Router>
    );
}

export default App;
