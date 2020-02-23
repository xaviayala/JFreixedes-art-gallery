import React from 'react';
import Gallery from '../components/Gallery';
import galleryContent from '../data/gallery-content';
import MainHeader from '../components/MainHeader';

const GalleryPage = () => {
    const galleryTitle = "Josep Freixedes' Gallery";

   // get unique category items
   const uniqueItems = (x, i, array) => array.indexOf(x) === i;
   const pictureCategories = galleryContent.map(picture => picture.category).filter(
       uniqueItems
   );

   pictureCategories.push("all");
   pictureCategories.sort();

    return (
    <>
        <MainHeader title={galleryTitle} />
        <section id="galleries">
            <div className="gallery">
            <Gallery pictures={galleryContent} pictureCategories={pictureCategories} />
            </div>
        </section>
    </>
    );
}

export default GalleryPage;