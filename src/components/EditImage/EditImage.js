import React, {Component} from 'react';
import AddImage from '../AddImage/AddImage';
import Tooltip from '../Tooltip/Tooltip';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';


class EditImage extends Component {

  state={
    image: {},
    showEdit: false
  }
    
  componentDidMount() {
    this.props.getImageById(this.props.match.params.id);
  }

  remuveImageHandler = () => {
    this.props.deleteImage(this.props.currentImage.id);
  }

  toggleEditModal = () =>{
    this.setState( previousState => {
      return {
        showEdit: !previousState.showEdit
      }
    })
  }

 render(){
 const {currentImage, loading, getImageList, editImage} = this.props;
  return (
    <Spinner loading={loading}>
        <div className='editImage'>
          {
            this.state.showEdit && <div className='editModal'>
            <div className='modalContent'>
              <AddImage 
                  imageData={currentImage}
                  closeBtnHandler={this.toggleEditModal}
                  closeBtn={true}
                  editImage={editImage}
                  getImageList={getImageList}/>
              </div>
            </div>
          }
            <Tooltip 
                    message={currentImage.tooltip ? currentImage.tooltip.title: ''} 
                    position={currentImage.tooltip ? currentImage.tooltip.position : ''}
                    isShow={currentImage.addTooltip}
              >
              <div className='image-wraper'>
                <span>{currentImage.name}</span>
                <img src={currentImage.url} alt='images' className='imageStyle'></img>
              </div>
            </Tooltip>
            <div className='btn-groupe'>
            <button className="btn btn-outline-primary"  onClick={this.toggleEditModal}>Edit image</button>
            <button className='btn btn-outline-danger' onClick={this.remuveImageHandler}>Delete image</button>
            </div>
        </div>
        </Spinner> 
  )
 }
}

EditImage.PropTypes = {
  currentImage: PropTypes.object,
  loading: PropTypes.bool,
  getImageList: PropTypes.func,
  editImage: PropTypes.func,
}

export default EditImage;
