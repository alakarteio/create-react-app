import React from 'react'
import PropTypes from 'prop-types'
import { component } from 'hoc'
import styles from './jokes.styles'

const Jokes = ({
  classes,
}) => (
  <div className={classes.main}>
    JOKES ON YOU
  </div>
)

Jokes.propTypes = {
  classes: PropTypes.object,
}

Jokes.defaultProps = {
  classes: {},
}

export default component({ styles })(Jokes)
