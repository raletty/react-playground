import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
  ,
  document.getElementById('root')
);
