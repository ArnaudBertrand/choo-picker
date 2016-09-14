const extend = require('xtend');
const KEY_CODES = require('../utils/keys');

module.exports = {
  namespace: 'itinerary',
  state: {
    origin: '',
    destination: '',
  },
  reducers: {
    set: ({id, value}, state) => {
      return extend(state, {[id]: value});
    },
  },
};

