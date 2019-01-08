import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({loading, children}) => {
  return (
   <div className='lds-wraper'> 
   {
      loading 
      ? 
       <div className="loader">Loading...</div>
      :
      children
    }
    </div>
  )
}

Spinner.PropTypes = {
  loading: PropTypes.bool
}

export default Spinner