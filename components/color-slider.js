const html = require('choo/html');

module.exports = (props, send) => {
  const {label, min, max} = props;
  return html`
    <div>
      ${label}
      <input
          type="range"
	  min="${min}"
	  max="${max}"
	  oninput=${(e) => { send(e.target.value) }} />
    </div>
  `;
};
