import * as React from 'react';
import PictureItem from './PictureItem';
import Viewer from 'react-viewer';

class PictureItems extends React.Component {
  //Parent  component is the parent component storing state 
  //It is a class with a constructor (as opposed to a functional component only concerned with renderinfg elements)
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      activeIndex: 0,
      pictureItems:[],
    }
        
    //binding the event handler to this instance 
    //class methods are not bound by default in ES6!
    this.onPictureClick = this.onPictureClick.bind(this);
  }

  //event handler is defined aa a method in the parent class
  onPictureClick(key) {
    this.setState({ activeIndex:  getPictureIndex(this.state.pictureItems, key)});
    this.setState({ visible: !this.state.visible });
  }

  componentDidMount() {
    this.setState({pictureItems: populatePictureItems(this.props.pictures)});
  }

  render() {
    return [
      this.props.pictures
        .filter(
          ({ category }) =>
            this.props.displayCategory === category || this.props.displayCategory === "all"
        )
        .map(({token, filename, name}) => (
              <PictureItem
                  key={`PictureItems-${name}`}
                  token={token}           
                  filename={filename}
                  name={name}
                  onPictureClick={this.onPictureClick} 
              />
        )),
        <Viewer
          key={`ViewerPictureItems-${this.state.name}`}
          visible={this.state.visible}
          onClose={() => { this.onPictureClick(); } }
          images={this.state.pictureItems} 
          activeIndex={this.state.activeIndex}
        />
      ];
    }
}

export default PictureItems;

function getPictureIndex(arr, key) {
  return (arr.findIndex(obj => obj.key === key));
}

function populatePictureItems(data) {
  const pictureItems = []

  for (let i = 0; i < data.length; i++) {
      pictureItems.push({ 
          "key" : data[i].token,     
          "src" : require(`../assets/images/fulls/${data[i].filename}`),
          "alt" : data[i].name,    
      });
  };

  return pictureItems;
}