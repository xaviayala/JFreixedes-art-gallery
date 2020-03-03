import React from "react";
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle, pageDescription}) => {
    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
        </Helmet>
    );
};
export default PageHelmet
