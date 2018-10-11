import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = props => {
  const { onButtonClick, buttonText } = props

  return (
    <button className="dropdown">
      <span className="dropdown__text">{buttonText}</span>
    </button>
  )
}

Dropdown.propTypes = {
  onButtonClick: PropTypes.func,
  buttonText: PropTypes.string
}

export default Dropdown
