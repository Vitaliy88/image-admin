import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ImagesList from '../components/ImagesList';

import { getImageList } from '../actions/getListOfImages';
import {getImagesList, getLoadingStatus} from '../selectors/imageSelector';

const mapStateToProps = state => ({
  imageList: getImagesList(state),
  loading: getLoadingStatus(state)
});

const ImagesListContainer = compose(
  withRouter,
  connect(mapStateToProps, {getImageList})
)(ImagesList);

export default ImagesListContainer;