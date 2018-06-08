import PropTypes from 'prop-types'
import { compose, withContext } from 'recompose'
import { inject, listen } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'
import loaderHoc from 'hoc-react-loader/build/core'
import getContext from './getContext'
import LoadingIndicator from './loadingIndicator'

export default ({ screen, name, listeners, form, injectForm, mapStore, loader } = {}) => {
  const hocs = []
  // route (hide or not the component)
  if (screen) {
    if (typeof screen === 'string') hocs.push(forRoute.absolute(screen))
    else if (screen.relative) hocs.push(forRoute(screen.code))
    else hocs.push(forRoute.absolute(screen.code))
  }

  // listeners
  if (listeners) {
    let listenersContext = name
    if (screen) {
      if (typeof screen === 'string') listenersContext = screen
      else listenersContext = screen.code
    }

    hocs.push(listen(listeners, listenersContext))
  }

  // form to the context (only if not present into props)
  if (form) {
    hocs.push(
      withContext({ form: PropTypes.string }, props => ({
        form: props.form || form,
      }))
    )
  }

  // form into props
  if (injectForm) hocs.push(getContext())

  // map store to props
  if (mapStore) hocs.push(inject(mapStore))

  // loader (hide/show elements)
  if (loader) {
    const options = { LoadingIndicator }

    if (typeof loader === 'string') {
      options.print = [loader]
    }

    hocs.push(loaderHoc(options))
  }

  return compose(...hocs)
}
