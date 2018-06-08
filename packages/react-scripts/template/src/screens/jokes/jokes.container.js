import { container } from 'hoc';
import Component from './jokes';
import listeners from './jokes.listeners';

const screen = 'jokes';

const mapStore = store => ({
  jokes: store.data.jokes.getKeys(),
});

export default container({ screen, listeners, mapStore })(Component);
