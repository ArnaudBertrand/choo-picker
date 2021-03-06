const html = require('choo/html');
const colorPicker = require('../components/color-picker');
const locationPicker = require('../components/location-picker');
const recap = require('../components/recap');

module.exports = (state, prev, send) => {
return html`
    <div>
      <h2>Choo, Choo!</h2>
      <a href="/create/name">Create your train</a>

      <h2>Summary</h2>
      ${recap(state, prev, send)}
    </div>
  `;
};
