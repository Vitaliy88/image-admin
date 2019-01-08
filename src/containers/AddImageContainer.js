import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AddImage from '../components/AddImage/AddImage';


import { addImage } from '../actions/addImage';
import { getImageList } from '../actions/getListOfImages'


const AddImageContainer = compose(
  withRouter,
  connect(null, {addImage, getImageList})
)(AddImage);

export default AddImageContainer;