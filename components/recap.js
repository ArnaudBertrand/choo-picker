const html = require('choo/html');

module.exports = (state, prev, send) => {
  const {R, G, B} = state.train.color;

  return html`
    <div class="recap mdl-card mdl-shadow--4dp">
      <div class="mdl-card__title">${state.train.name}</div>
      <div class="mdl-card__supporting-text">
        <div>Origin: ${state.itinerary.origin}</div>
        <div>Destination: ${state.itinerary.destination}</div>
	<div>Color: <span style="color: rgb(${R}, ${G}, ${B});">train color</span></div>
      </div>
    </div>
  `;
};
