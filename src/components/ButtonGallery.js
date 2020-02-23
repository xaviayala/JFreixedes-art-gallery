import React from 'react';
import { Link } from 'react-router-dom';
import { withLocalize, Translate } from "react-localize-redux";

const ButtonGallery = () => (
    <>
        <Link to="/gallery" className="button big">
            <Translate id="pages.home.galleryButton" />
        </Link> 
    </>
);

export default withLocalize(ButtonGallery);