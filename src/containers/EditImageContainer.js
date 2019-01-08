import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import EditImage from '../components/EditImage/EditImage';


import { getImageById, deleteImage } from '../actions/getImageById';
import { editImage } from '../actions/editImage'
import {getImage, getLoadingStatus} from '../selectors/imageSelector';
import { getImageList } from '../actions/getListOfImages'

const mapStateToProps = state => ({
  currentImage: getImage(state),
  loading: getLoadingStatus(state)
});
 
const EditImageContainer = compose(
  withRouter,
  connect(mapStateToProps, {getImageById, deleteImage, editImage, getImageList})
)(EditImage);

export default EditImageContainer;