import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tooltip extends Component {

    state = {
      displayTooltip: false
    }
  
  hideTooltip = () =>{
    this.setState({displayTooltip: false})
    
  }
  showTooltip = () =>{
    this.setState({displayTooltip: true})
  }

  render() {
    const { message, position, isShow } = this.props
    return (
      <span className='costom-tooltip'
          onMouseLeave={this.hideTooltip}
        >
        {this.state.displayTooltip &&
        <div className={`costom-tooltip-bubble costom-tooltip-${position}`}>
          <div className='costom-tooltip-message'>{message}</div>
        </div>
        }
        <span className='costom-tooltip-trigger'>
        { isShow && <i className={`fas fa-hand-pointer tooltip-pointer-${position}`} onMouseOver={this.showTooltip}></i>}
          {this.props.children}
        </span>
      </span>
    )
  }
}

Tooltip.PropTypes = {
  message: PropTypes.string,
  position: PropTypes.string,
  isShow: PropTypes.bool
}

export default Tooltip;