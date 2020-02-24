import React from 'react';
import { withLocalize, Translate } from "react-localize-redux";
import MainHeader from '../components/MainHeader';
import Facebook from '../components/Facebook';

const ContactPage = () => {

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
                      <div class="field half first">
                        <label for="name"><Translate id="pages.contact.name" /></label>
                        <input name="name" id="name" type="text" placeholder="Name" />
                      </div>
                      <div class="field half">
                        <label for="email">Email</label>
                        <input name="email" id="email" type="email" placeholder="Email" />
                      </div>
                      <div class="field">
                        <label for="message"><Translate id="pages.contact.message" /></label>
                        <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
                      </div>
                      <div class="field">
                        <div data-netlify-recaptcha="true"></div>
                        <div class="g-recaptcha" data-sitekey="6LcnvNsUAAAAADD6_E9geeWuPh5zwE10oOBso-G9"></div>
                      </div>
                      <ul class="actions">
                        <li>
                            <Translate>{
                              ({ translate }) => {
                                return <input value={translate("pages.contact.submit")} class="button" type="submit" />
                              }
                            }</Translate>
                        </li>
                      </ul>
                    </form>
                    <Facebook />
                </div>
          </section>
        </>
    );
}

export default withLocalize(ContactPage);