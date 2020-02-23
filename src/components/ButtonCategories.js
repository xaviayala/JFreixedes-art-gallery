import React from 'react';
import { Translate } from "react-localize-redux";

const ButtonCategories = (pictureCategories, setCategory) => (
  <>
  <ul className="tabs">
    {pictureCategories.map((category, key) => (
        <li key={key}>
            <button className="button" onClick={() => setCategory(category)}>
              <Translate>
                {({ translate }) => (translate(`tags.${category}`))}  
              </Translate> 
            </button>        
        </li>
      ))}
    </ul>
  </>
  );

  export default ButtonCategories;