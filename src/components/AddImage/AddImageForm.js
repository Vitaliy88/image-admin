import React from 'react';
import PropTypes from 'prop-types';

const AddImageForm = ({handleSubmit, fileChangedHandler, handleInputChange, handleChange, image, isValid, closeBtnHandler, closeBtn}) => {
  return (
    <div>
    <form onSubmit={handleSubmit} className='formStyle'>
    {
      image.url &&  
      <div className='image-wraper'>
        <span>{image.name}</span>
        <img src={image.url} alt='images' className='imageStyle'></img>
      </div>
    }
      <label>
      <input
        className="form-control-file"
        placeholder='Add file'
        type="file"
        accept='.jpg, .png, .jpeg'
        onChange={fileChangedHandler}>
      </input>
    </label>
    <label>
      Add pointer with tooltip
      <input
        name="addTooltip"
        type="checkbox"
        value={image.addTooltip}
        checked={image.addTooltip}
        onChange={handleInputChange} />
    </label>
    {
      image.addTooltip &&
      <React.Fragment>
      <label>
        Select tooltop position:
        <select className="form-control" value={image.tooltip.position} name="position" onChange={handleChange}>
          <option value="top">top</option>
          <option value="right">right</option>
          <option value="bottom">bottom</option>
          <option value="left">left</option>
        </select>
      </label>
      <label>
        Type tooltop text:
        <input
        className="form-control"
          value={image.tooltip.title}
          name="title"
          type="text"
          onChange={handleChange}>
        </input>
      </label>
      </React.Fragment>
    }
    <div className='modal-button'>
    <input className={`btn ${!isValid > 0 ?'btn-secondary' : 'btn-primary'}`}
           type="submit"
           value="Save" 
           disabled={!isValid > 0}/>
    {
      closeBtn && <input type="button" value="Cloce" onClick={closeBtnHandler} className="btn btn-danger"/>
    }
    </div>
  </form>
  </div>
  )
}

AddImageForm.PropTypes = {
  closeBtnHandler: PropTypes.func,
  handleSubmit: PropTypes.func,
  fileChangedHandler: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleChange: PropTypes.func,
  image: PropTypes.object,
  isValid: PropTypes.bool,
  closeBtn: PropTypes.bool
}

export default AddImageForm
