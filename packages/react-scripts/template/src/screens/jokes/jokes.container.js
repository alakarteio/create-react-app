import { container } from 'hoc'
import Component from './jokes'

const screen = 'jokes'

export default container({ screen })(Component)
