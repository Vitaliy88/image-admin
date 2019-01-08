import React from 'react'
import PropTypes from 'prop-types';

const ImageItem = ({image}) => {
  return (
    <div className='image-wraper'>
      <span>{image.name}</span>
      <img src={image.url} alt='images' className='imageStyle'></img>
    </div>
  )
}

ImageItem.PropTypes = {
  loading: PropTypes.object,
  isSingle: PropTypes.boll
}

export default ImageItem;
