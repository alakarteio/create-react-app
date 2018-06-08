import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@k-redux-router/react-k-ramel'
import { component } from 'hoc'
import styles from './main.styles'

import logo from './logo.png'

const Main = ({ classes }) => (
  <div className={classes.main}>
    <header className={classes.header}>
      <img src={logo} className={classes.logo} alt="logo" />
      <h1 className={classes.title}>Welcome to k-ramel</h1>
    </header>
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
