import { createStore } from 'k-ramel'
import definition from './definition'
import drivers from './drivers'

export default createStore(definition, {
  drivers,
})
