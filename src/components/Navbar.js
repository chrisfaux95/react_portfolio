import React from 'react';

export default function Navbar() {
    return (
        <nav className="mb-1
                navbar
                navbar-expand
                navbar-dark
                bg-primary
                sticky-top">
            <a className="navbar-brand mb-1 h1"
            href="index.html">
                Chris Faux
            </a>
            <ul className="navbar-nav navbar-right ml-md-auto">
                <li className="nav-item mx-1">
                    <a className="nav-link btn btn-dark"
                    href="/">
                        About Me
                    </a>
                </li>
                <li className="nav-item mx-1">
                    <a className="nav-link btn btn-dark"
                    href="/portfolio">
                        Portfolio
                    </a>
                </li>
                <li className="nav-item mx-1">
                    <a className="nav-link btn btn-dark"
                    href="/contact">
                        Contact Me
                    </a>
                </li>
            </ul>
        </nav>
    )
}