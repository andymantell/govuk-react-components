import React from 'react'
import PropTypes from 'prop-types'

function ErrorMessage(props) {
  var visuallyHiddenText
  if (props.visuallyHiddenText) {
    visuallyHiddenText = <span className="govuk-visually-hidden">{props.visuallyHiddenText}</span>
  }

  return (
    <span id={props.id} className={`govuk-error-message ${props.classes}`} {...props.attributes}>
      {visuallyHiddenText}
      {props.html || props.text}
    </span>
  )
}

ErrorMessage.defaultProps = {
  visuallyHiddenText: 'Error:',
  classes: '',
}

ErrorMessage.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  html: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  visuallyHiddenText: PropTypes.string,
}

export default ErrorMessage
