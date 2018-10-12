import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withState, withHandlers, compose } from 'recompose'
import './dropdown.scss'

const DropdownRecompose = props => {
  const {
    children,
    toggleDropdown,
    isClosed,
    buttonText,
    typeWidth
  } = props

  const conditionalClass = cx({ 'dropdown--closed' : isClosed })

  return (
    <div className={`dropdown dropdown--${typeWidth} ${conditionalClass}`}>
      <button className="dropdown__button" onClick={toggleDropdown}>
        <span className="dropdown__button__text">{buttonText}</span>
      </button>
      <div className="dropdown__content">
        <div className="dropdown__content__wrapper">{children}</div>
      </div>
    </div>
  )
}

DropdownRecompose.propTypes = {
  toggleDropdown: PropTypes.func,
  isClosed: PropTypes.bool,
  buttonText: PropTypes.string,
  typeWidth: PropTypes.string
}

DropdownRecompose.defaultProps = {
  isClosed: true,
  typeWidth: 'medium'
}

const decorator = compose(
  withState('isClosed', 'setIsClosed', true),
  withHandlers({
    toggleDropdown: props => () => {
      props.setIsClosed(!props.isClosed)
    }
  })
)

export default decorator(DropdownRecompose)
