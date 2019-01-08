import React, { Component }from 'react'
import PropTypes from 'prop-types';
import Spinner from './Spinner/Spinner';
import ImageItem from './ImageItem/ImageItem';
import { Link } from "react-router-dom";

class ImagesList extends Component {

  componentDidMount() {
    this.props.getImageList()
  }

  render(){
    return (
      <Spinner loading={this.props.loading}> 
        <div className='row'>
          {
            this.props.imageList.map(image=>{
              const { id } = image;
              return(
                <Link to={`images/${id}`} key={id} className='col-xs-6 col-md-4'>
                  <ImageItem  image={image} isSingle={true}/>
                </Link>
              )
            })
          }
        </div>
      </Spinner> 
    )
  }
}

ImagesList.PropTypes = {
  getImageList: PropTypes.func,
  imageList: PropTypes.array,
}

export default ImagesList;