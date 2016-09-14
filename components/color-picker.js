const html = require('choo/html');
const extend = require('xtend');
const colorSlider = require('./color-slider');

module.exports = (state, prev, send) => {
  const color = state.train.color;
  const {R, G, B} = color;
  const sliderProps = {min: 0, max: 255};

  function updateRed(val) {
    send('train:setColor', extend(color, {R: val}));
  }

  function updateGreen(val) {
    send('train:setColor', extend(color, {G: val}));
  }
  
  function updateBlue(val) {
    send('train:setColor', extend(color, {B: val}));
  }

  return html`
    <div>
      ${colorSlider(extend(sliderProps, {label: 'Red'}), updateRed)}
      ${colorSlider(extend(sliderProps, {label: 'Green'}), updateGreen)}
      ${colorSlider(extend(sliderProps, {label: 'Blue'}), updateBlue)}
    </div>
  `;
};
