const html = require('choo/html');

const Wheel = ({x, y, r}) => html`<circle cx=${x} cy=${y} r=${r} />`;

const Rect = ({x, y, h, w, fill}) => html`<rect x=${x} y=${y} width=${w} height=${h} fill=${fill} />`

const Car = (data) => {
  const {background, floor, height, offsetX, rWheel, width} = data;

  const leftWheel = {x: offsetX + 2*rWheel, y: floor, r: rWheel};
  const rightWheel = {x: offsetX + width - 2*rWheel, y: floor, r: rWheel};
  const container = {x: offsetX, y: floor-height, w: width, h: height, fill: background};

  return html`
    <g>
      ${Rect(container)}
      ${Wheel(leftWheel)}
      ${Wheel(rightWheel)}
    </g>
  `;
}

const Locomotive = (data) => {
  const {background, height, floor, offsetX, rWheel, width} = data;

  const leftWheel = {x: offsetX + 2*rWheel, y: floor, r: rWheel};
  const rightWheel = {x:offsetX + width - 2*rWheel, y: floor, r: rWheel};
  const top = {x: offsetX-width/12, y: floor-height, w: (2/3)*width, h: height/5, fill: background};
  const carWindow = {x: offsetX + width/12, y: floor - (4/5)*height, w: width/3, h: height/4, fill: 'black'}
  const carHorizontal = {x: offsetX, y: floor - height/2, w: width, h: height/2, fill: background};
  const carVertical= {x: offsetX, y: floor - height, w: width/2, h: height, fill: background};
  const chimney = {x: offsetX + (4/5)*width, y: floor - (2/3)*height, w: 30, h: height/2, fill: background};

  return html`
    <g>
      ${Rect(carVertical)}
      ${Rect(carHorizontal)}
      ${Rect(carWindow)}
      ${Rect(top)}
      ${Rect(chimney)}
      ${Wheel(leftWheel)}
      ${Wheel(rightWheel)}
    </g>
  `;
}

module.exports = (state) => {
  const spaceBetweenCars = 20;
  const nbCars = 2;
  const rWheel = 15;

  const floor = 150;

  const {R, G, B} = state.train.color;
  const background = `rgb(${R}, ${G}, ${B})`;

  const car = {
    background,
    height: 60,
    floor,
    rWheel,
    width: 150,
  };
  
  const locoData = {
    background,
    height: 110,
    floor,
    offsetX: 15 + nbCars * (spaceBetweenCars + car.width),
    rWheel,
    width: 190,
  }

  const cars = [];
  for (let i = 0; i < nbCars; i++) {
    cars.push(Object.assign({}, car, {
      offsetX: 15 + i*car.width + i*spaceBetweenCars,
    }));
  }

  const namePos = {
    x: locoData.offsetX + (locoData.width/2),
    y: floor - car.height/2,
  };
  
  return html`
    <div>
      <svg width="560px" height="250px">
        ${cars.map(carData => Car(carData))}
        ${Locomotive(locoData)}
	<text fill="black" text-anchor="middle" x=${namePos.x} y=${namePos.y}>
	  ${state.train.name}
         </text>
      </svg>
    </div>
  `;
};

