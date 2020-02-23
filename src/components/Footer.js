
import React from 'react';
import { withLocalize, Translate } from "react-localize-redux";

const Footer = () => (
    <footer id="footer">
        <div className="copyright">
            <Translate id="common.copyright" />
        </div>
    </footer>
);

export default withLocalize(Footer);

