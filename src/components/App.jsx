import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from './Layout';
import Info from '../views/Info';
import Resume from '../views/Resume';
import Projects from '../views/Projects';
import Contact from '../views/Contact';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter basename='/website'>
      <Layout>
        <Switch>
          <Route exact path="/" component={Info} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
