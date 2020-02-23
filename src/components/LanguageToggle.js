import React from "react";
import { withLocalize } from "react-localize-redux";

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => {
    return (        
            <ul className="icons">
                {languages.map(lang => (<li key={lang.code}>
                    <img src={require(`../assets/images/flags/flag-${lang.code}.png`)} alt={lang.name} onClick={() => setActiveLanguage(lang.code)} />
                </li>))}
            </ul>
   );
};

export default withLocalize(LanguageToggle);