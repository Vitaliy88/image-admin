import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddImageForm from './AddImageForm';

class AddImage extends Component {

  state={
    isValid: this.props.imageData ? true : false,
    image: this.props.imageData || {
      addTooltip: false,
      id: null,
      name: null,
      url: null,
      tooltip: {
        position: "top",
        title: ""
      }
    }
  }
 
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({image: {
        ...this.state.image,
        [name]: value
      }
    });
  }
  handleChange = (event) => {
    const name = event.target.name;
    this.setState({image: {
      ...this.state.image,
      tooltip:{
        ...this.state.image.tooltip,
        [name]: event.target.value}
      }
    });
  }

  handleSubmit = (event) =>{
    event.preventDefault();

    if(this.props.closeBtn){
      this.props.editImage(this.state.image);
      this.props.getImageList();
    } else {
      this.props.addImage(this.state.image);
      this.props.getImageList();
    }
  }

  fileChangedHandler = (event) => {
    const file = event.target.files[0];
    let imageDataUrl;
      const reader  = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
          imageDataUrl = reader.result;
          if(file){
            this.setState({
              image: {
                ...this.state.image,
                url: imageDataUrl,
                id: this.props.imageData ? this.props.imageData.id : Date.now(),
                name: file.name,
              },
              isValid: true
            })
          } else {
            this.setState({
              image: {
                ...this.state.image,
                url: '',
                id: null,
                name: '',
              },
              isValid: false
            })
          }
        }, false);
  }

  render(){
    const { image, isValid} = this.state;
    const { closeBtnHandler, closeBtn } = this.props;
    return (
      <AddImageForm 
        handleSubmit={this.handleSubmit}
        fileChangedHandler={this.fileChangedHandler} 
        handleInputChange={this.handleInputChange} 
        handleChange={this.handleChange}
        image={image}
        isValid={isValid} 
        closeBtnHandler={closeBtnHandler}
        closeBtn={closeBtn}
        />
    )
 }
}
AddImage.PropTypes = {
  closeBtnHandler: PropTypes.func,
  closeBtn: PropTypes.bool
}


export default AddImage;
