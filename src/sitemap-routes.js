import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

export default (
    <Router>
        <Route path="/gallery" />
        <Route path="/about"  />
        <Route path="/contact"  />
        <Route path="/cookie-policy" />
        <Route exact path="/blog"  />
        <Route path="/blog/:slug" />
    </Router>
);
