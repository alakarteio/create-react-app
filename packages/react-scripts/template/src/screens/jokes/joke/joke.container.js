import { container } from 'hoc';
import Component from './joke';

const mapStore = (store, { id }) => store.data.jokes.get(id);

export default container({ mapStore })(Component);
