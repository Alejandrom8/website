import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {
    InfoSquareFill,
    FilePersonFill,
    Box,
    At,
    List,
    X,
    Code
} from 'react-bootstrap-icons';

import './styles/Menu.css';
import MyPhoto from './images/myphoto.jpg';


const options = [
    {direction: '/', text: 'Info', icon: <InfoSquareFill />},
    {direction: '/resume', text: 'Resume', icon: <FilePersonFill />},
    {direction: '/projects', text: 'Projects', icon: <Box />},
    {direction: '/skills', text: 'Skills', icon: <Code />},
    {direction: '/contact', text: 'Contact', icon: <At />},
];

function MenuOption(props) {
    const selectClass = props.isSelected ? 'selected' : '';
    return (
        <Link 
            to={props.direction}
            className={`Menu__option ${selectClass}`} 
            onClick={() => props.onClick(props.index)}
        >
            <span>{props.icon}</span>
            {props.text}
        </Link>
    )
}

function MenuOptionBox(props) {
    const history = useHistory();
    const current = history.location.pathname;
    const index = options.findIndex(opt => opt.direction === current);
    const defaultIndex =  index >= 0 ? index : 0;

    const [selected, setSelected] = useState(defaultIndex);
    const handleClick = (index) => {
        setSelected(index);
        if(props.isMovile) props.handleIsMovile();
    }

    return (
        <nav>
            <ul>
                {options.map((opt, i) => {
                    let isSelected = false;
                    if(selected === i) isSelected = true;
                    return <li key={i}>
                        <MenuOption {...opt} isSelected={isSelected} index={i} onClick={handleClick}/>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default function Menu() {
    const [isMovile, setIsMovile] = useState(false);
    const [menuVisibility, setMenuVisibility] = useState(false);
    const handleClick = () => {
        setIsMovile(true);
        setMenuVisibility(!menuVisibility);
    };

    return (
        <div className="Menu">
            <section className="Menu__photo-container centered">
                <img 
                    src={MyPhoto} 
                    alt="me in a mountain"
                    className="Menu__photo"
                />
            </section>
            <section className="Menu__info">
                <div className="floatingDiv">
                    <h2 className="MyName">
                        Alejandro Gómez García
                    </h2>
                    <h4 className="career">
                        <span className="red">{"<"}</span>
                            FullStack Developer
                        <span className="red">{"/>"}</span>
                    </h4>
                </div>
                <div className="Menu__button-container">
                    <button className="Menu__button" onClick={handleClick}>
                        <List 
                            className="Menu__button-icon"
                        />
                    </button>
                </div>
            </section>
            <section className={`Menu__links ${isMovile && menuVisibility ? 'showed' : ''}`}>
                <div className="Menu__button-close__container">
                    <button className="Menu__button-close" onClick={handleClick}>
                        <X className="Menu__button-close__icon"/>
                    </button>
                </div>
                <MenuOptionBox isMovile={isMovile} handleIsMovile={handleClick} />
            </section>
        </div>
    )
}