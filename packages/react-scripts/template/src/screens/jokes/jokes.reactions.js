const JOKES_URL =
  'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten';

export const load = (action, store, { http }) => {
  http('JOKES').get(JOKES_URL);
};

export const set = ({ payload }, store) => {
  store.data.jokes.set(payload);
};
