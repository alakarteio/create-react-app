import { keyValue, simpleObject } from 'k-ramel'

export default {
  data: {
    jokes: keyValue({ key: 'id' }),
  },
  ui: {
    selected: simpleObject({ defaultData: '' }),
  },
}
