import { router } from '@k-redux-router/react-k-ramel'

const routes = {
  '/': {
    code: 'main',

    '/jokes': {
      code: 'jokes',

      '/:jokeId': {
        code: 'joke',
      },
    },
  },
}

export default router({ routes })
