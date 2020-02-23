import React from 'react';
import { withLocalize, Translate } from "react-localize-redux";

const Banner = () => (
    <>
        <div className="inner">
            <h1><Translate id="pages.home.mainTitle" /></h1>
            <p><Translate id="pages.home.subTitle" /></p>
            <ul className="actions">
                <li>
                    <a href="#galleries" className="button alt scrolly big"><Translate id="pages.home.mainButton" /></a>
                </li>
            </ul>
        </div>
    </>
);

export default withLocalize(Banner);