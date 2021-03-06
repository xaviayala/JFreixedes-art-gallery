import React from 'react';
import { withLocalize, Translate } from "react-localize-redux";
import MainHeader from '../components/MainHeader';
import SocialMedia from '../components/SocialMedia';
import PageHelmet from '../components/PageHelmet';
import { renderToStaticMarkup } from "react-dom/server";
import globalTranslations from "../data/gallery-translations.json";
// Import reCaptcha
import Recaptcha from 'react-recaptcha'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactPage extends React.Component {

    constructor(props) {
        super(props);

        this.props.initialize({
            languages: [
                { name: "English", code: "en" },
                { name: "Español", code: "es" },
                { name: "Català", code: "ca" }
            ],
            translation: globalTranslations,
            options: { 
                renderToStaticMarkup,
                defaultLanguage: "en" 
            }
        });

        this.state = {
          email: '',
          message: '',
          name: '',
          isCaptchaValid: false,
          isErrorShown: false,
          isFormValid: false
        }

        //binding the event handler to this instance 
        //class methods are not bound by default in ES6!
        this.handleInput = this.handleInput.bind(this);
        this.onCaptchaLoad = this.onCaptchaLoad.bind(this);
        this.onCaptchaVerify = this.onCaptchaVerify.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // Handle visitor's interaction with inputs
      handleInput = (event) => {
        // Test for input and length of the value
        if (event.target.value.length > 0 && event.target.name !== 'email') {
          this.setState({
            [event.target.name]: event.target.value
          })
        }

        // If input is for email address validate it with regexp
        if (event.target.name === 'email') {
          const reg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i

          if (reg.test(String(event.target.value).toLowerCase())) {
            this.setState({
              [event.target.name]: event.target.value
            })
          }
        }
      }

     // Show message in console to check reCaptcha plugin is loaded
      onCaptchaLoad = () => {
        console.log('Captcha loaded')
    }

     // Update state after reCaptcha validates visitor
    onCaptchaVerify = (response) => {
      this.setState({
        isCaptchaValid: true
      })
    }

    handleFormSubmit = (event) => {
      //prevent form submission before validation
      event.preventDefault()

      // Test
      if (this.state.email.length > 0 && 
          this.state.name.length > 0 && 
          this.state.message.length > 0 && 
          this.state.isCaptchaValid) {

        this.setState({
          isErrorShown: false,
          isFormValid: true
        })

        // Form validated and ready to submit
        console.log("Submitting form!")
        
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => 
              alert("Thank you for your feedback!"))
          .catch(error => alert(error));
    
        // Reset state after sending the form
        this.setState({
          email: '',
          message: '',
          name: '',
          isCaptchaValid: false,
          isErrorShown: false,
          isFormValid: false
        })
        console.log("form cleanup!")
        
      } else {
        // Show error message
        this.setState({
          isErrorShown: true
        })
      }
    }

    render() {
        return (
                <>
                {/*  SEO Section: Adding the SEO helmet component to allows us to set the HTML metadata in the header of our Contact Page gallery */ }
                <Translate>{    
                    ({ translate }) => {
                        return <PageHelmet pageTitle={translate("pages.home.mainTitle")} 
                        pageDescription={translate("pages.home.subTitle")+ '. ' + translate("pages.home.body")}
                        pageKeywords={translate("pages.home.keywords")}  
                        pageImage={window.location.origin + "/josep-freixedes.jpg"} />
                    }
                }</Translate>

                  <MainHeader />
                  <section className="wrapper">
                    <div className="inner">
                          <header className="align-center">
                              <h1><Translate id="pages.contact.pageTitle" /></h1>
                              <h3><Translate id="pages.contact.request" /></h3>
                          </header>
                          <form name="contact" method="POST" data-netlify="true" onSubmit={this.handleFormSubmit}>
                              <input type="hidden" name="form-name" value="contact" />
                              <div className="field half first">
                                <label htmlFor="name"><Translate id="pages.contact.name" /></label>
                                <input name="name" id="name" type="text" placeholder="Name" onChange={this.handleInput} required={true} />
                              </div>
                              <div className="field half">
                                <label htmlFor="email">Email</label>
                                <input name="email" id="email" type="email" placeholder="Email" onChange={this.handleInput} required={true} />
                              </div>
                              <div className="field">
                                <label htmlFor="message"><Translate id="pages.contact.message" /></label>
                                <textarea name="message" id="message" rows="6" placeholder="Message" onChange={this.handleInput} required={true}></textarea>
                              </div>
                              <div className="field">
                                {/*
                                <div className="g-recaptcha" data-sitekey="6Leict0UAAAAANiDa5mVoxFWM3EWn2871xu9TDto"></div>
                                */}
                                <Recaptcha onloadCallback={this.onCaptchaLoad}
                                            sitekey="6Leict0UAAAAANiDa5mVoxFWM3EWn2871xu9TDto"
                                            render="explicit"
                                            size="compact"
                                            verifyCallback={this.onCaptchaVerify}
                                            />
                                            {this.state.isErrorShown && (
                                                <div>
                                                  <p><Translate id="pages.contact.captchaError" /></p>
                                                </div>
                                              )}
                              </div>
                              <ul className="actions">
                                <li>
                                    <Translate>{
                                      ({ translate }) => {
                                        return <input value={translate("pages.contact.submit")} className="button" type="submit" />
                                      }
                                    }</Translate>
                                </li>
                              </ul>
                            </form>
                            <SocialMedia />
                        </div>
                  </section>
              </>)
      }    
  }
  

export default withLocalize(ContactPage);