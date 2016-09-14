const html = require('choo/html');
const extend = require('xtend');
const cities = require('./cities.json');
const R = require('ramda');

module.exports = (state, prev, send) => {
  const value = typeof state.value === 'string' ? state.value : '';

  let cityList = '';
  if (state.value && state.list && state.list.length) {
    cityList = html`<ul>
      ${state.list.map(location => html`<li onclick=${() => setLocation(location)}>
          ${location}
        </li>`)}
      </ul>`;
  }
  function updateLocations(value) {
    const searchCity = R.pipe(
      R.pluck('name'),
      R.filter(R.test(new RegExp(`^${value}`, 'i'))),
      R.take(5)
    );

    send('locations:update', {id: state.id, value, list: searchCity(cities)});
  }

  function setLocation(value) {
    send('locations:update', {id: state.id, value, list: []});
    send('itinerary:set', {id: state.id, value});
  }

  return html`
    <div>
	<label class="floatingLabel ${value ? '' : 'empty'}">
          <span class="label">${state.label}</label>
          <input class="input"
	         oninput=${e => updateLocations(e.target.value)}
		 value=${value}
	         id=${state.id} />
	</label>
	${cityList}
    </div>
  `;
};
