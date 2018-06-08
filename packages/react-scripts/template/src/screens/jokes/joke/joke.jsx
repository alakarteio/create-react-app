import React from 'react'
import PropTypes from 'prop-types'
import { component } from 'hoc'
import styles from './joke.styles'

const Joke = ({
  classes,
  setup,
  punchline,
}) => (
  <details className={classes.main}>
    <summary>{setup}</summary>
    <p>{punchline}</p>
  </details>
)

Joke.propTypes = {
  classes: PropTypes.object,
  setup: PropTypes.string,
  punchline: PropTypes.string,
}

Joke.defaultProps = {
  classes: {},
  setup: undefined,
  punchline: undefined,
}

export default component({ styles })(Joke)
