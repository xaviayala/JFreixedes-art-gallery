import React from 'react';
import LanguageToggle from '../components/LanguageToggle';

const MainHeader = () => (
    <>
    <header id="header">
        <div className="languageToolbar">
            <LanguageToggle />
        </div>
    </header>
    </>
);

export default MainHeader;