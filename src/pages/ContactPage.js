import React from 'react';
import { withLocalize, Translate } from "react-localize-redux";
import MainHeader from '../components/MainHeader';
import Facebook from '../components/Facebook';
import { renderToStaticMarkup } from "react-dom/server";
import globalTranslations from "../data/gallery-translations.json";
// Import reCaptcha
import Recaptcha from 'react-recaptcha'

class ContactPage extends React.Component {

    constructor(props) {
        super(props);

        this.props.initialize({
            languages: [
                { name: "English", code: "en" },
                { name: "Spanish", code: "es" },
                { name: "Catalan", code: "ca" }
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
      handleInput = event => {
        // Test for input and length of the value
        if (event.target.value.length > 0 && event.target.name !== 'email') {
          this.setState({
            [event.target.name]: event.target.value
          })
        }

        // If input is for email address validate it with regexp
        if (event.target.name === 'email') {
          // eslint-disable-next-line
          const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

          if (reg.test(String(event.target.value).toLowerCase())) {
            this.setState({
              [event.target.name]: event.target.value
            })
          }
        }
      }

     // Show message in console when reCaptcha plugin is loaded
      onCaptchaLoad = () => {
        console.log('Captcha loaded')
    }

     // Update state after reCaptcha validates visitor
    onCaptchaVerify = (response) => {
      this.setState({
        isCaptchaValid: true
      })
    }

    handleFormSubmit = event => {
      event.preventDefault()

      // Test
      if (this.state.email.length > 0 && this.state.name.length > 0 && this.state.message.length > 0 && this.state.isCaptchaValid) {
        this.setState({
          isErrorShown: false,
          isFormValid: true
        })

        // Form validated and ready to submit
        console.log("Submitting form!")

        // Reset state after sending the form
        this.setState({
          email: '',
          message: '',
          name: '',
          isCaptchaValid: false,
          isErrorShown: false,
          isFormValid: false
        })
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
                                            verifyCallback={this.onCaptchaVerify}
                                            />
                              </div>
                              <ul className="actions">
                                <li>
                                    <Translate>{
                                      ({ translate }) => {
                                        return <input value={translate("pages.contact.submit")} className="button" type="submit" onClick={this.handleFormSubmit} />
                                      }
                                    }</Translate>
                                </li>
                              </ul>
                              {this.state.isErrorShown && (
                              <div>
                                <p>Please, make sure to fill all fields.</p>
                              </div>
                              )}
                            </form>
                            <Facebook />
                        </div>
                  </section>
              </>)
      }    
  }
  

export default withLocalize(ContactPage);