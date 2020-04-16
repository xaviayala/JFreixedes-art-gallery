import React from "react";
import { withLocalize } from "react-localize-redux";

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => {
    return (        
            <ul className="icons">
                {languages.map(lang => (<li key={lang.code}>                    
                    <div className="tooltip">
                        <img src={require(`../assets/images/flags/flag-${lang.code}.png`)} alt={lang.name} onClick={() => setActiveLanguage(lang.code)} />                    
                        <span className="tooltiptext">{lang.name}</span> 
                    </div>
                </li>))}
            </ul>
   );
};

export default withLocalize(LanguageToggle);