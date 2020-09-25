import React from 'react';

import './styles/skills.css';
import JS from '../components/images/js.png';
import PHP from '../components/images/php.png';
import GO from '../components/images/go.png';
import NODE from '../components/images/node.png';
import SWIFT from '../components/images/swift.png';
import C from '../components/images/c.png';
import SQL from '../components/images/sql.png';
import BASH from '../components/images/bash.png';
import CSS from '../components/images/css.png';
import HTML from '../components/images/html.png';
import SCSS from '../components/images/sass.png';

import REACT from '../components/images/react.png';
import EXPRESS from '../components/images/express.png';
import REDUX from '../components/images/redux.png';
import BOOTSTRAP from '../components/images/bootstrap.png';
import MATERIALIZE from '../components/images/materialize.png';
import PHASER from '../components/images/phaser.png';
import SOCKET from '../components/images/socketio.png';
import JQUERY from '../components/images/jquery.png';

import GIT from '../components/images/git.png';
import GITHUB from '../components/images/github.png';
import WEBPACK from '../components/images/webpack.png';
import PHOTOSHOP from '../components/images/photoshop.png';
import FIGMA from '../components/images/figma.png';

import MYSQL from '../components/images/mysql.png';
import MONGODB from '../components/images/mongodb.png';
import REDIS from '../components/images/redis.png';
import FIREBASE from '../components/images/firebase.png';

import WINDOWS from '../components/images/windows.png';
import LINUX from '../components/images/linux.png';
import MACOS from '../components/images/macos.png';


const skillSection = [
    {
        title: 'Programming Languages, Preprocessors, Execute Environments and More',
        skills: [
            {logo: JS, title: 'JavaScript', level: 2},
            {logo: PHP, title: 'PHP', level: 1},
            {logo: GO, title: 'Go', level: 1},
            {logo: NODE, title: 'Node.js', level: 1},
            {logo: SWIFT, title: 'Swift',level: 1},
            {logo: C, title: 'C', level: 0},
            {logo: SQL, title: 'SQL', level: 0},
            {logo: BASH, title: 'Bash', level: 0},
            {logo: HTML, title: 'HTML', level: 1},
            {logo: CSS, title: 'CSS', level: 1},
            {logo: SCSS, title: 'SASS', level: 0}
        ]
    },
    {
        title: 'Frameworks',
        skills: [
            {logo: REACT, title: 'React.js', level: 1},
            {logo: EXPRESS, title: 'Express.js', level: 1, logoStyles: {
                img: {backgroundColor: '#fff'}
            }},
            {logo: REDUX, title: 'Redux.js', level: 0},
            {logo: BOOTSTRAP, title: 'Bootstrap', level: 1},
            {logo: MATERIALIZE, title: 'Materialize', level: 1},
            {logo: PHASER, title: 'Phaser.io', level: 1},
            {logo: SOCKET, title: 'Socket.io', level: 1},
            {logo: JQUERY, title: 'JQuery', level: 1}
        ]
    },
    {
        title: 'Design and Development Tools',
        skills: [
            {logo: GIT, title: 'Git', level: 1},
            {logo: GITHUB, title: 'Github', level: 1, logoStyles: {img: {backgroundColor: '#fff', padding:'1%', borderRadius: '3px'}}},
            {logo: WEBPACK, title: 'Webpack', level: 0},
            {logo: PHOTOSHOP, title: 'Photoshop', level: 0},
            {logo: FIGMA, title: 'Figma', level: 0, logoStyles: {img: {width: '50px'}}}
        ]
    },
    {
        title: 'DataBases and DBMS',
        skills: [
            {logo: MYSQL, title: 'MySQL', level: 1},
            {logo: MONGODB, title: 'MongoDB', level: 1},
            {logo: REDIS, title: 'Redis', level: 1},
            {logo: FIREBASE, title: 'Firebase', level: 0},
        ]
    },
    {
        title: 'Operating Systems',
        skills: [
            {logo: WINDOWS, title: 'Windows', level: 1},
            {logo: LINUX, title: 'Linux (Ubuntu and CENTOS)', level: 1},
            {logo: MACOS, title: 'Mac', level: 0}
        ]
    }
];

function Skill(props) {
    let level;

    switch(props.level) {
        case 0: 
            level = 'basic';
            break;
        case 1:
            level = 'intermediate';
            break;
        case 2: 
            level = 'advanzed';
            break;
        default: 
            level = '';
    }

    return (
        <div className="Skill col-sm-3">
            <div 
                className="Skill__logo"
                style={props.logoStyles?.container}
            >
                <img 
                    src={props.logo} 
                    alt={props.title} 
                    style={props.logoStyles?.img}
                />
            </div>
            <div className="Skill__title">
                <h5>{props.title}</h5>
            </div>
            <div className="Skill_level">
                <span>{level}</span>
            </div>
        </div>
    )
}

function SkillSection({title, skills}) {
    const renderSkills = () => {
        if(!skills.length) return '';

        return skills.map(skill => (
            <Skill
                logo={skill.logo}
                title={skill.title}
                level={skill.level}
                logoStyles={skill.logoStyles}
            />
        ))
    };

    return (
        <section className="SkillSection">
            <div className="title">
                <h4>{title}</h4>
            </div>
            <div className="SkillSection__body">
                <div className="row">
                {renderSkills()}
                </div>
            </div>
        </section>
    )
}

export default function Skills(props) {
    const renderSkillList = () => {
        return skillSection.map(sl => (
            <SkillSection 
                title={sl.title}
                skills={sl.skills}
            />
        ));
    };

    return (
        <div className="Skills container">
            <h1>Skills</h1>
            <div className="container">
                {renderSkillList()}
            </div>
        </div>
    )
}   