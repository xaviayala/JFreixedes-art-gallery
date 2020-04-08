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

//Blog
import BlogPage from './pages/BlogPage';
import Post from './blog/Post';

//Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CookieConsentMessage from './components/CookieConsentMessage';

//Google Analytics
import GA from './components/GoogleAnalytics'

//Assets
import './assets/css/main.css';


function App() {  

  return (  
    <LocalizeProvider>
      <Router>
        {/* 
         Check if the current environment will be using Google Analytics.
         It will return a boolean and RouteTracker component will be conditionally rendered.
         Since it is not wrapped as part of the  component, it will be rendered every time depending on what init returns.
        */}
       { GA.init() && <GA.RouteTracker /> }
        <div className="page-wrap">
          <NavBar />
          <section id="main">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/gallery" component={GalleryPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/cookie-policy" component={CookiePolicyPage} />
              <Route exact path="/blog" component={BlogPage} />
              <Route path="/blog/:slug" render={Post} />
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
