
import React from 'react';
import MainHeader from '../components/MainHeader';
import { withLocalize, Translate } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import globalTranslations from "../data/gallery-translations.json";

class CookiePolicyPage extends React.Component {

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
    }

    render() {
        return (
                <>
                <MainHeader />
                    <section className="wrapper">
                        <div className="inner">
                            <header>
                                <h1><Translate id="pages.cookiepolicy.pageTitle" /></h1>
                                <h4><Translate id="pages.cookiepolicy.headline" /><a href="https://jfreixedes-artstudio.me" target="_blank" rel="noopener noreferrer">https://jfreixedes-artstudio.me</a></h4>
                            </header>
                            <div>
                                    <p><strong>What Are Cookies</strong></p>
                                    <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
                                    <p>For more general information on cookies see the Wikipedia article on HTTP Cookies.</p>
                                    <p><strong>How We Use Cookies</strong></p>
                                    <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
                                    <p><strong>Disabling Cookies</strong></p>
                                    <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p>
                                    <p><strong>The Cookies We Set</strong></p>
                                    <ul>
                                        <li>
                                            <p>Forms related cookies</p>
                                            <p>When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p>
                                        </li>
                                    </ul>
                                    <p><strong>Third Party Cookies</strong></p>
                                    <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
                                    <ul>
                                        <li>
                                            <p>Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.</p>
                                        </li>
                                    </ul>
                                    <p><strong>More Information</strong></p>
                                    <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. This Cookies Policy was created with the help of the <a href="https://www.cookiepolicygenerator.com" target="_blank" rel="noopener noreferrer">Cookies Policy Template Generator</a> and the <a href="https://www.privacypolicytemplate.net/" target="_blank" rel="noopener noreferrer">Privacy Policy Template Generator</a>.</p>
                                    <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>
                                    <ul>
                                        <li>Email: UP958975@myport.ac.uk</li>
                                    </ul>
                                </div>
                        </div>
                    </section>    
                </>)
        }    
}

export default withLocalize(CookiePolicyPage);