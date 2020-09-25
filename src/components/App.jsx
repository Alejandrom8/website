import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from './Layout';
import Info from '../views/Info';
import Resume from '../views/Resume';
import Projects from '../views/Projects';
import Contact from '../views/Contact';
import Skills from '../views/Skills';

import './styles/App.css';

function NotFound() {
  return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
        <div style={{textAlign: 'center'}}>
          <h1>404</h1>
          <p>this content seams to be not here</p>
        </div>
      </div>
  )
}

function App() {
  return (
    <BrowserRouter basename='/website'>
      <Layout>
        <Switch>
          <Route exact path="/" component={Info} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/skills" component={Skills} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
