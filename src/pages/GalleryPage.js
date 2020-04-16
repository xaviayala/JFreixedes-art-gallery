import React from 'react';
import Gallery from '../components/Gallery';
import galleryContent from '../data/gallery-content';
import MainHeader from '../components/MainHeader';
import PageHelmet from '../components/PageHelmet';
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize, Translate } from "react-localize-redux";
import globalTranslations from "../data/gallery-translations.json";

const galleryTitle = "Josep Freixedes' Gallery";

// get unique category items
const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const pictureCategories = galleryContent.map(picture => picture.category).filter(
    uniqueItems
);

pictureCategories.push("all");
pictureCategories.sort();

class GalleryPage extends React.Component {

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
        return (<>
                {/*  SEO Section: Adding the SEO helmet component to allows us to set the HTML metadata in the header of our GAllery Page gallery */ }
                <Translate>{    
                    ({ translate }) => {
                        return <PageHelmet pageTitle={translate("pages.home.mainTitle")} 
                        pageDescription={translate("pages.home.subTitle")+ '. ' + translate("pages.home.body")}
                        pageKeywords={translate("pages.home.keywords")}  
                        pageImage={window.location.origin + "/logo512.png"} />
                    }
                }</Translate>

                <MainHeader title={galleryTitle} />
                <section id="galleries">
                    <div className="gallery">
                    <Gallery pictures={galleryContent} pictureCategories={pictureCategories} />
                    </div>
                </section>
                </>)
    }
}

export default withLocalize(GalleryPage);