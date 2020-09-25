import React from 'react';

import './styles/projects.css';

import ExpressPNG from '../components/images/express.png';

class Project {
    constructor(image, title, description, path) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.path = path;
    }
}

const projects = [
    new Project(
        ExpressPNG, 
        'Express', 
        'Some quick example text to build on the card title and make up the bulk of the cards content.',
        '/projects'
    ),
    new Project(
        ExpressPNG, 
        'Express', 
        'Some quick example text to build on the card title and make up the bulk of the cards content.',
        '/projects'
    ),
    new Project(
        ExpressPNG, 
        'Express', 
        'Some quick example text to build on the card title and make up the bulk of the cards content.',
        '/projects'
    ),
];

function ProjectCard(props) {
    return (
        <div className="card">
            <div className="card-banner">
                <img src={props.image} alt="Card image cap" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.path} class="btn btn-primary">Ver projecto</a>
            </div>
        </div>
    )
}

export default function Projects() {

    const renderProjectCards = () => {
        return projects.map(p => (
            <div className="col-md-6">
                <ProjectCard {...p} />
            </div>
        ))
    };

    return (
        <div className="container">
            <h1>Proyectos Personales</h1>
            <div className="container">
                <div className="row">
                    {renderProjectCards()}
                </div>
            </div>
        </div>
    )
}