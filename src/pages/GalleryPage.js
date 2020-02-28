import React from 'react';
import Gallery from '../components/Gallery';
import galleryContent from '../data/gallery-content';
import MainHeader from '../components/MainHeader';

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