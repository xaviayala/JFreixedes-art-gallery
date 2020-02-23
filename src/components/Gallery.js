import React from 'react'
import PictureItems from './PictureItems';
import ButtonCategories from './ButtonCategories';

class Gallery extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        displayCategory: "all",
        pictures: props.pictures,
        pictureCategories: props.pictureCategories,
        visible: false,
      };
      this.setCategory = this.setCategory.bind(this);
    }
    setCategory(category) {
      this.setState({
        displayCategory: category
      });
    }

    render() {      
      return(<>    
              <div className="filter">
                  {ButtonCategories(this.props.pictureCategories, this.setCategory)}
              </div>
              <div className="content">
                  <PictureItems {...this.state} onClick={this.onPictureClick} />
              </div>
            </>);
    }
  }

  export default Gallery;