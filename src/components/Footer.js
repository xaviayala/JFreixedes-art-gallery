
import React from 'react';
import { withLocalize, Translate } from "react-localize-redux";

const Footer = () => (
    <>
    <footer id="footer">
        
        <div className="copyright">
            <span className="credits"><Translate id="common.copyright" /></span>
            <div className="logos" >
                <a href="https://buttercms.com" target="_blank" rel="noopener noreferrer">
                    <img className="logo" src="https://cdn.buttercms.com/JSSDbrHPSnGlLUcyHTn5" alt="ButterCMS" />
                </a>
        </div>
        </div>
      
        
    </footer>
    </>
);

export default withLocalize(Footer);

