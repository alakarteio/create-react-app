import React from 'react'
import PropTypes from 'prop-types'
import wrapDisplayName from 'recompose/wrapDisplayName'

export default () => (Component) => {
  const Wrapped = (props, { form }) => {
    return <Component {...props} form={props.form || form} />
  }

  // meta
  Wrapped.contextTypes = { form: PropTypes.string }
  Wrapped.displayName = wrapDisplayName(Component, 'getContext')
  Wrapped.propTypes = { form: PropTypes.string }
  Wrapped.defaultProps = { form: undefined }

  return Wrapped
}
