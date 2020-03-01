import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import { LocalizeProvider } from "react-localize-redux";

//Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CookieConsentMessage from './components/CookieConsentMessage';

//Assets
import './assets/css/main.css';


function App() {  

  return (  
    <LocalizeProvider>
      <Router>
        <div className="page-wrap">
          <NavBar />
          <section id="main">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/gallery" component={GalleryPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/cookie-policy" component={CookiePolicyPage} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
            <CookieConsentMessage />
          </section>
        </div>        
      </Router>
    </LocalizeProvider>  
  );
}

export default App;
