import React from 'react';
import { withLocalize, Translate } from "react-localize-redux";

const Banner = () => (
    <>
        <div className="inner">
            <h1><Translate id="pages.home.mainTitle" /></h1>
            <h2><Translate id="pages.home.subTitle" /></h2>
            <span><Translate id="pages.home.body" /></span>
            <ul className="actions">
                <li>
                    <a href="#galleries" className="button alt scrolly fit"><Translate id="pages.home.mainButton" /></a>
                </li>
            </ul>
        </div>
    </>
);

export default withLocalize(Banner);