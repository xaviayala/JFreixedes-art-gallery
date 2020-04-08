import React from 'react';
import { withLocalize, Translate } from "react-localize-redux";

const PictureItem = ({ token, filename, name, onPictureClick }) => {

  return (
  <>  
    <div className="media" itemScope itemType="http://schema.org/VisualArtwork"> 
          <Translate>
            {({ translate }) => <img src={require(`../assets/images/thumbs/${filename}`)}
                                     title={translate(`pictures.${token}.title`)} 
                                     alt={translate(`pictures.${token}.title`)}
                                     onClick={() => { onPictureClick(token); }} 
                                     itemProp="image" />} 
          </Translate>
          {/* Microdata section: HTML Microdata specifications in order to markup structured data.
          
          HTML5 Microdata is an easy way to add semantic markup to your web pages. Search
          engines rely on this markup to improve the display of search results, making it easier
          for people to find the right web pages.
          */}
          <meta itemProp="thumbnailUrl" content={require(`../assets/images/thumbs/${filename}`)} />
          <meta itemProp="artist" content="Josep Freixedes" />
          <meta itemProp="artform" content="Painting" />
          <meta itemProp="abstract" content={(`pictures.${token}.title`)} />
    </div>
  </>);
}

export default withLocalize(PictureItem);