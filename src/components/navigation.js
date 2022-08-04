import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = () => {
    return (
        <div className="Navigation">
            <ul>
                <NavLink to="/" >
                    <li> ACCUEUIL</li>
                </NavLink>
                <NavLink to="about" >
                    <li>à PROPOS</li>
                </NavLink>
            </ul>

        </div>
    );
};

export default navigation;