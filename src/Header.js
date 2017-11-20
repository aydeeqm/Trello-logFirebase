import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

const Header= () => {
    return (
        <header className="main-header">
            <nav id="boards_nav">
                <ul>
                    <li>
                        <NavLink to={"/"}><i className="fa fa-columns"></i><span> Boards</span></NavLink>
                    </li>
                </ul>
            </nav>
            <a href="/"><span className="logo"></span></a>
            <nav className="right">
                <ul>
                    <li>
                        <a className="current-user">
                            <img alt="Gravatar for john@phoenix-trello.com" src="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=50" srcset="//www.gravatar.com/avatar/6a88cfcf7b76267b129b8dc477c4105e?d=retro&amp;r=g&amp;s=100 2x" height="50" width="50" className="react-gravatar react-gravatar"/>
                            <span></span>
                            <span>Aydee QM</span>
                        </a>
                    </li>
                    <li>
                        <NavLink to={"/signin"}><i className="fa fa-sign-out"></i><span> Sign out</span></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;