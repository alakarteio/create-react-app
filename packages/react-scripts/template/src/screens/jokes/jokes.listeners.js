import { when } from 'k-ramel';
import { load, set } from './jokes.reactions';

export default [
  when('@@krml/LISTENERS>ADDED>jokes')(load),
  when('@@http/JOKES>GET>ENDED')(set),
];
