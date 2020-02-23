import React from 'react';
import { withLocalize, Translate } from "react-localize-redux";

const PictureItem = ({ token, filename, name, onPictureClick }) => {

  return (
  <>  
    <div className="media"> 
          <Translate>
            {({ translate }) => <img src={require(`../assets/images/thumbs/${filename}`)}
                                     title={translate(`pictures.${token}.title`)} 
                                     alt={translate(`pictures.${token}.title`)}
                                     onClick={() => { onPictureClick(token); }} />} 
          </Translate>
    </div>
  </>);
}

export default withLocalize(PictureItem);