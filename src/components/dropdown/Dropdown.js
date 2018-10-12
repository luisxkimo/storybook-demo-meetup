import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './dropdown.scss'

const Dropdown = props => {
  const {
    children,
    onButtonClick,
    isClosed,
    buttonText,
    typeWidth
  } = props

  const conditionalClass = cx({ 'dropdown--closed' : isClosed })

  return (
    <div className={`dropdown dropdown--${typeWidth} ${conditionalClass}`}>
      <button className="dropdown__button" onClick={onButtonClick}>
        <span className="dropdown__button__text">{buttonText}</span>
      </button>
      <div className="dropdown__content">
        <div className="dropdown__content__wrapper">{children}</div>
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  onButtonClick: PropTypes.func,
  isClosed: PropTypes.bool,
  buttonText: PropTypes.string,
  typeWidth: PropTypes.string
}

Dropdown.defaultProps = {
  isClosed: true,
  typeWidth: 'medium'
}

export default Dropdown
