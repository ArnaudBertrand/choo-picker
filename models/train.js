const extend = require('xtend');

module.exports = {
  namespace: 'train',
  state: {
    name: '',
    color: {R: 125, G: 125, B: 125},
  },
  reducers: {
    setName: (name, state) => extend(state, {name}),
    setColor: (color, state) => extend(state, {color}),
  },
};

