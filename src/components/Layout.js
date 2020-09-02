import React from 'react';

import Menu from './Menu';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Layout.css';

export default function Layout({children}) {
    return (
        <div className="Layout">
            <div className="Layout__menu">
                <Menu />
            </div>
            <div className="Layout__mainContent">
                <div className="container">
                {children}
                </div>
            </div>
        </div>
    )
}