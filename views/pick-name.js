const html = require('choo/html');
const Train = require('../components/train.js');

module.exports = (state, prev, send) => html`
<div>
  <h2>Pick a name for your train</h2>
  ${Train(state, prev, send)}
  <input oninput=${(e) => send('train:setName', e.target.value)} />
  <a href="/create/color">Continue</a>
</div>
`;
