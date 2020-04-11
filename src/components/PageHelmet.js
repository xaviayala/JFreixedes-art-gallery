import React from "react";
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle, pageDescription, pageImage}) => {
    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta property="og:title" content={pageTitle} />
            <meta name="description" content={pageDescription} />
            <meta property="og:description" content={pageDescription} />
            <meta name="og:image" content={pageImage} />
        </Helmet>
    );
};
export default PageHelmet
