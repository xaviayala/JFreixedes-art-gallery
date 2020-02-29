import React from 'react';
import { withLocalize, Translate } from "react-localize-redux";
import MainHeader from '../components/MainHeader';
import Facebook from '../components/Facebook';
import { renderToStaticMarkup } from "react-dom/server";
import globalTranslations from "../data/gallery-translations.json";

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
                          <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
                              <input type="hidden" name="form-name" value="contact" />
                              <div className="field half first">
                                <label htmlFor="name"><Translate id="pages.contact.name" /></label>
                                <input name="name" id="name" type="text" placeholder="Name" />
                              </div>
                              <div className="field half">
                                <label htmlFor="email">Email</label>
                                <input name="email" id="email" type="email" placeholder="Email" />
                              </div>
                              <div className="field">
                                <label htmlFor="message"><Translate id="pages.contact.message" /></label>
                                <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
                              </div>
                              <div className="field">
                                <div data-netlify-recaptcha="true"></div>
                                <div className="g-recaptcha" data-sitekey="6Leict0UAAAAANiDa5mVoxFWM3EWn2871xu9TDto"></div>
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
                            <Facebook />
                        </div>
                  </section>
              </>)
      }    
  }
  

export default withLocalize(ContactPage);