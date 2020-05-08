import React from 'react';
import MainHeader from '../components/MainHeader';
import { withLocalize, Translate } from "react-localize-redux";
import SocialMedia from '../components/SocialMedia';
import PageHelmet from '../components/PageHelmet';
import { renderToStaticMarkup } from "react-dom/server";
import globalTranslations from "../data/gallery-translations.json";


class AboutPage extends React.Component {

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
                {/*  SEO Section: Adding the SEO helmet component to allows us to set the HTML metadata in the header of our About Page gallery */ }
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
                            <h1><Translate id="pages.about.pageTitle" /></h1>
                        </header>
                        <div className="flex flex-2">
                            <div className="col col2">
                                <p>
                                    <Translate id="pages.about.intro" />
                                </p>
                                <p>
                                    <Translate id="pages.about.body" />
                                </p>
                            </div>
                            <div className="col col1 first">
                                <div className="image round fit">
                                    <img src={require(`../assets/images/josep-freixedes.jpg`)} alt="Josep Freixedes" />
                                </div>
                            </div>
                            <p>
                            <Translate id="pages.about.ending" />
                            </p>
                        </div>
                        <SocialMedia />
                    </div>
                </section>    
        </>)
    }    
}

export default withLocalize(AboutPage);