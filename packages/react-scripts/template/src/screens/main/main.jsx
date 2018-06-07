import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@k-redux-router/react-k-ramel'
import { component } from 'hoc'
import styles from './main.styles'

const Main = ({
  classes,
}) => (
  <div className={classes.main}>
    <Link code="jokes">>Go to jokes</Link>
  </div>
)

Main.propTypes = {
  classes: PropTypes.object,
}

Main.defaultProps = {
  classes: {},
}

export default component({ styles })(Main)
