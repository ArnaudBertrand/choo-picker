const html = require('choo/html');
const ColorPicker = require('../components/color-picker');
const Train = require('../components/train');

module.exports = (state, prev, send) => html`
<div>
  <h2>Pick your color</h2>
  ${Train(state, prev, send)}
  ${ColorPicker(state, prev, send)}
  <a href="/create/itinerary">Continue</a>
</div>
`;
