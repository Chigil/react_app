import React, {useState} from 'react';
import {Link} from "react-router-dom";


const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const links = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Users',
            link: '/users',
        },
        {
            name: 'Posts',
            link: '/posts',
        },
        {
            name: 'Photos',
            link: '/photos',
        },
    ];
    const toggleMenu = () => {
        setMenuActive(!menuActive)
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LOGO</a>
                <button onClick={toggleMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-end ${menuActive ? 'show': ''}`}  id="navbarNav">
                    <ul className="navbar-nav">
                        {links.map((link, index) =>
                            <li key={index} className="nav-item">
                                <Link
                                    to={link.link}
                                    className="nav-link"
                                    onClick={toggleMenu}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;