import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ homeRoute }) {
    return (
        <nav className="mb-1
                navbar
                navbar-expand
                navbar-dark
                bg-primary
                sticky-top">
            <Link className="navbar-brand mb-1 h1"
                to={homeRoute}>
                Chris Faux
            </Link>
            <ul className="navbar-nav navbar-right ml-md-auto">
                <li className="nav-item mx-1">
                    <Link className="nav-link btn btn-dark" to={homeRoute}>About Me</Link>
                </li>
                <li className="nav-item mx-1">
                    <Link className="nav-link btn btn-dark" to={homeRoute + "portfolio"}>Portfolio</Link>
                </li>
                <li className="nav-item mx-1">
                    <Link className="nav-link btn btn-dark" to={homeRoute + "contact"}>Contact Me</Link>
                </li>
            </ul>
        </nav>
    )
}