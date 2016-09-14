const extend = require('xtend');
const KEY_CODES = require('../utils/keys');

module.exports = {
  namespace: 'rail',
  state: {
    form: 'OOOOOOO',
    angle: 0,
  },
  reducers: {
    rotateLeft: (data, state) => {
      return extend(state, {angle: state.angle - 90});
    },
    rotateRight: (data, state) => {
      return extend(state, {angle: state.angle + 90});
    },
  },
  subscriptions: [
    (send, done) => {
      document.body.addEventListener('keydown', (e) => { 
        if (e.keyCode === KEY_CODES.ARROW_LEFT) {
	  send('rail:rotateLeft', {}, () => {}); 
        }
        if (e.keyCode === KEY_CODES.ARROW_RIGHT) {
	  send('rail:rotateRight', {}, () => {}); 
        }
      });
    },
  ],
};

