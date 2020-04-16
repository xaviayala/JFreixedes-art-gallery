import React from 'react';
import MainHeader from '../components/MainHeader';
import { withLocalize, Translate } from "react-localize-redux";
import Blog from '../blog/BlogHome';
import { renderToStaticMarkup } from "react-dom/server";
import globalTranslations from "../data/gallery-translations.json";

class BlogPage extends React.Component {

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
                        <header className="align-center">
                            <h1><Translate id="pages.blog.pageTitle" /></h1>
                        </header>                      
                        <Blog />
                        <ul className="actions">
                            <li>
                                <a href="https://buttercms.com/blog_home/" className="button" target="_blank" rel="noopener noreferrer">
                                        <Translate id="pages.blog.postButton" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>    
        </>)
    }    
}

export default withLocalize(BlogPage);