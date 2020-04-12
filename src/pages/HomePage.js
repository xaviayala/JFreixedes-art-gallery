import React from 'react';
import Banner from '../components/Banner';
import ButtonGallery from '../components/ButtonGallery';
import PageHelmet from '../components/PageHelmet';
import MainHeader from '../components/MainHeader';
import Gallery from '../components/Gallery';
import galleryContent from '../data/gallery-content';
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize, Translate } from "react-localize-redux";
import globalTranslations from "../data/gallery-translations.json";

const galleryTitle = "What's New";
const maxAdditions = 8;

// get unique category items
const uniqueItems = (x, i, array) => array.indexOf(x) === i;  

//Show the latest gallery additions 
const latestGalleryAdditions = galleryContent.slice(0, maxAdditions).sort((a, b) => b.addedOn - a.addedOn)

const pictureCategories = latestGalleryAdditions.map(picture => picture.category).filter(
    uniqueItems
);

pictureCategories.push("all");
pictureCategories.sort();


class HomePage extends React.Component {

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
        return (<>
                {/*  SEO Section: Adding first a SEO helmet to allows us to set the HTML metadata in the header of our home page gallery */ }
                <Translate>{    
                ({ translate }) => {
                    return <PageHelmet pageTitle={translate("pages.home.mainTitle")} 
                                       pageDescription={translate("pages.home.subTitle")}
                                       pageKeywords={translate("pages.home.keywords")} 
                                       pageImage={window.location.origin + "/logo512.png"} />
                }
                }</Translate>
    
                <MainHeader title={galleryTitle} />
                <section id="banner">
                        <Banner />
                </section>
                <section id="galleries">
                    <div className="gallery">
                        <Gallery pictures={latestGalleryAdditions} pictureCategories={pictureCategories} />
                        <footer>
                            <ButtonGallery />
                        </footer>
                    </div>
                </section>
            </>)
    }    
}

export default withLocalize(HomePage);