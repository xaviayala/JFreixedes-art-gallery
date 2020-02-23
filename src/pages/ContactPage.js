import React from 'react';
import MainHeader from '../components/MainHeader';
import Facebook from '../components/Facebook';

const ContactPage = () => {

  const pageTitle = "Get in touch!";

    return (
        <>
          <MainHeader title={pageTitle} />
          <section className="wrapper">
            <div className="inner">
                  <header className="align-center">
                      <h1>{pageTitle}</h1>
                  </header>
                  <form action="POST" data-netlify="true">
                      <div class="field half first">
                        <label for="name">Name</label>
                        <input name="name" id="name" type="text" placeholder="Name" />
                      </div>
                      <div class="field half">
                        <label for="email">Email</label>
                        <input name="email" id="email" type="email" placeholder="Email" />
                      </div>
                      <div class="field">
                        <label for="message">Message</label>
                        <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
                      </div>
                      <div class="field">
                        <div data-netlify-recaptcha="true"></div>
                      </div>
                      <ul class="actions">
                        <li><input value="Send Message" class="button" type="submit" /></li>
                      </ul>
                    </form>
                    <Facebook />
                </div>
          </section>
        </>
    );
}

export default ContactPage;