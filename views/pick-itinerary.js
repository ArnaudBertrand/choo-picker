const html = require('choo/html');
const locationPicker = require('../components/location-picker');

module.exports = (state, prev, send) => {
  const originState = {
    hideOn: state.itinerary.origin,
    id: 'origin',
    label: 'Origin',
    list: state.locations.places[state.locations.values.origin || ''] || [],
    placeholder: 'Search origin',
    value: state.locations.values.origin,
  };

  const destinationState = {
    hideOn: state.itinerary.destination,
    id: 'destination',
    label: 'Destination',
    list: state.locations.places[state.locations.values.destination || ''] || [],
    placeholder: 'Search destination',
    value: state.locations.values.destination,
  };

  return html`<div>
    <h2>Choose your itinerary</h2>
      <div class="locationContainer">
        ${locationPicker(originState, prev, send)}
        ${locationPicker(destinationState, prev, send)}
      </div>
    <a href="/create/recap">Continue</a>
  </div>`;
}
