const extend = require('xtend');
const KEY_CODES = require('../utils/keys');

module.exports = {
  namespace: 'locations',
  state: {
    places: {},
    values: {},
  },
  reducers: {
    update: (action, state) => {
      const places = action.value.length ? extend(state.places, {[action.value]: action.list}) : state.places;
      const values = extend(state.values, {[action.id]: action.value});
      return extend(state, {places, values});
    },
  },
};

