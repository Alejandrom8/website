import React from 'react';
import './styles/info.css';

import Platzi from '../components/images/platzi.jpg';

export default function Info() {
    return (
        <div className="Info">
            <section className="block b1">
                <h1>Alejandro Gómez García</h1>
                <h3 className="careerTitle">FullStack Developer</h3>
                <div className="content">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>
                                Hi, my name is Alejandro, I have 20 years old and I have grown in Mexico.
                                When I was 16 I have discovered the power of computers by a programming
                                class at high school. After a year of learning the art of computer science,
                                I understood that if you have a simple program like a note block, and passion,
                                you can change the world.
                            </p>
                        </div>
                        <div className="col-md-8">
                            <p>
                                Over the last 3 years, my professional career has taken a certain direction
                                with a specific objective: <b>help to make the difference with technology</b>.
                                And every day I try to rich that feeding my mind, setting me goals and
                                new challenges that challenge my way of thinking.
                            </p>
                        </div>
                        <div className="col-md-4">
                        {/*<img className="singlePhoto" src={Platzi} alt='me at platzi'/> */}
                        </div>
                        <div className="col-lg-12">
                            <p>hola</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="block b2">
                <header className="banner"></header>
            </section>
        </div>
    )
}