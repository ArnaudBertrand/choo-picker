// Polyfills
require('es6-promise').polyfill();
require('isomorphic-fetch');

// App
const choo = require('choo');
const app = choo();

// Model
app.model(require('./models/train'));
app.model(require('./models/itinerary'));
app.model(require('./models/locations'));

// Router
app.router(route => [
  route('/create/name', require('./views/pick-name.js')),
  route('/create/color', require('./views/pick-color.js')),
  route('/create/itinerary', require('./views/pick-itinerary.js')),
  route('/create/recap', require('./views/recap.js')),
  route('/', require('./views/app')),
]);

// Boostrap
const tree = app.start();
document.body.appendChild(tree);

