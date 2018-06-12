import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@k-redux-router/react-k-ramel'
import { component } from 'hoc'
import Joke from './joke'
import styles from './jokes.styles'

const Jokes = ({
  classes,
  jokes,
}) => (
  <div className={classes.main}>
    <div className={classes.actions}>
      <Link code="main">Go to main screen</Link>
    </div>

    <div className={classes.jokes}>
      {jokes.map(id => <Joke key={id} id={id} />)}
    </div>
  </div>
)

Jokes.propTypes = {
  classes: PropTypes.object,
  jokes: PropTypes.array,
}

Jokes.defaultProps = {
  classes: {},
  jokes: [],
}

export default component({ styles })(Jokes)
