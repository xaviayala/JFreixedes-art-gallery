
import React from 'react';
import { withLocalize } from "react-localize-redux";
import CookieConsent from "react-cookie-consent";

const CookieConsentMessage= () => (
    <>
         <CookieConsent
            location="bottom"
            buttonText="I accept"
            declineButtonText="I Decline"
            cookieName="JFreixedes-artGallery-cookie"
            contentClasses="disclaimer"
            disableStyles={true}
            buttonClasses="button"
            buttonId="btnAccept"
            declineButtonClasses="button"
            declineButtonId="btnDecline"
            expires={150}
            enableDeclineButton={true}
        >
            <p>
                This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. 
                To find out more about the cookies we use, see our Privacy Policy available <a href="cookie-policy">here</a>
            </p>
            <p>
                If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.
                This website uses cookies to enhance.
            </p>
        </CookieConsent>
    </>
);

export default withLocalize(CookieConsentMessage);