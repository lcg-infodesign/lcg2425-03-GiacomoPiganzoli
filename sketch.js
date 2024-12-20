
let data, nome, lunghezza, superficie, portata, temperatura;

let x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,x9,y9,x10,y10;

function preload(){
  data = loadTable("Assets/rivers-data.csv", "csv", "header");
}

//****************************************************************************************************************** SETUP */
function setup() {
  angleMode(DEGREES);
  let height=0;
  for (let j = 0; j < data.getRowCount(); j++) {
  let value = int(data.getString(j, "length"));
  height += value;};
  console.log(height);
  textFont("Helvetica");
  createCanvas(windowWidth, height/(windowWidth/182)+(windowWidth/50)*101);
  background("#ebedff");
  noLoop()
  }

//****************************************************************************************************************** DRAW */

function draw(){
  disegnaLegenda();
  translate(0,windowWidth/30);
  for(let i=0; i < data.getRowCount(); i++){
  nome = data.getString(i, "name");
  lunghezza = int(data.getString(i, "length"));
  superficie = int(data.getString(i, "area"));
  portata = int(data.getString(i, "discharge"));
  temperatura = int(data.getString(i, "avg_temp"));
  let color = colorFunction(temperatura);
  disegnaFiume(nome,lunghezza, superficie, portata, color,);
  sposta()
  }
}
//****************************************************************************************************************** DISEGNAFIUME */

function disegnaFiume(nome,lunghezza, superficie, portata, color,){
  strokeWeight(windowWidth/950);
  stroke(150)
  line( windowWidth/3, 0, windowWidth-windowWidth/30, 0)
  noFill();
  stroke(color);
  strokeWeight(windowWidth/100+portata/(windowWidth*2));
  x1=x2=x9=x10=windowWidth/3*2;
  x3=x4=x5=windowWidth/3*2-superficie/(windowWidth*11);
  x6=x7=x8=windowWidth/3*2+superficie/(windowWidth*11);
  let num=random(10)
  if(num<5){
    x3=x4=x5=windowWidth/3*2+superficie/(windowWidth*11);
    x6=x7=x8=windowWidth/3*2-superficie/(windowWidth*11);
    }
  let l=lunghezza/(windowWidth/180)+windowWidth/50;
  y1=0;
  y2=l/5;
  y3=l/5;
  y4=l/3;
  y5=y6=l/2;
  y7=l/3*2;
  y8=l/5*4;
  y9=l/5*4;
  y10=l;
  strokeCap(SQUARE); 
  bezier(x1,y1,x2,y2,x3,y3,x4,y4)
  strokeCap(ROUND); 
  bezier(x4,y4,x5,y5,x6,y6,x7,y7)
  strokeCap(SQUARE); 
  bezier(x7,y7,x8,y8,x9,y9,x10,y10)
  textSize(windowWidth*windowHeight/70000);
  strokeWeight(0)
  fill(150)
  textStyle(NORMAL);
  text(nome, windowWidth/3, windowHeight/30)
  }
//****************************************************************************************************************** SPOSTA */

  function sposta(){
    translate(0,lunghezza/(windowWidth/180)+windowWidth/50);
  }

//****************************************************************************************************************** DISEGNALEGENDA */
  function disegnaLegenda(){
    strokeWeight(windowWidth/1000);
    stroke(150);
    rect(windowWidth/30,windowWidth/30,windowWidth/3-windowWidth/13,windowWidth/2.5,windowWidth/50);
    //Rettangolo temperatura
    strokeWeight(0);
    fillGradient('linear', {
      from : [windowWidth/3-2*windowWidth/7.2,  windowWidth/2-windowWidth/6],   // x, y : Coordinates
      to : [windowWidth/3-2*windowWidth/7.2+windowWidth/5,  windowWidth/2-windowWidth/6], // x, y : Coordinates
      steps : [
        color(0, 19, 163),
        color(133, 147, 255),
      ] // Array of p5.color objects or arrays containing [p5.color Object, Color Stop (0 to 1)]
    });
    rect(windowWidth/3-2*windowWidth/7.2, windowWidth/2-windowWidth/8, windowWidth/4.7, windowWidth/30,windowWidth);
    strokeWeight(windowWidth/1000);
    line(windowWidth/20, windowWidth/18, windowWidth/3-2*windowWidth/20, windowWidth/18);
    //Linea Superficie
    line(windowWidth/11, windowWidth/3.5, windowWidth/3-2*windowWidth/18, windowWidth/3.5);
    line(windowWidth/11, windowWidth/3.5, windowWidth/11, windowWidth/3.6);
    line(windowWidth/3-2*windowWidth/18, windowWidth/3.6, windowWidth/3-2*windowWidth/18, windowWidth/3.5);
    //Linea Lunghezza
    line(windowWidth/3-windowWidth/13, windowWidth/3-windowWidth/3.6,windowWidth/3-windowWidth/13, windowWidth/3-windowWidth/9.1)
    line(windowWidth/3-windowWidth/12, windowWidth/3-windowWidth/3.6,windowWidth/3-windowWidth/13, windowWidth/3-windowWidth/3.6)
    line(windowWidth/3-windowWidth/12, windowWidth/3-windowWidth/9.1,windowWidth/3-windowWidth/13, windowWidth/3-windowWidth/9.1)
    //Linea portata
    line(windowWidth/7.1, windowWidth/4, windowWidth/3-2*windowWidth/11, windowWidth/4);
    line(windowWidth/7.1, windowWidth/4.1, windowWidth/7.1, windowWidth/4);
    line(windowWidth/3-2*windowWidth/11, windowWidth/4.1, windowWidth/3-2*windowWidth/11, windowWidth/4);
    
    noFill();
    stroke("#5C6FFF");
    strokeWeight(windowWidth/100);
    x1=x2=x9=x10=windowWidth/6-windowWidth/50;
    x3=x4=x5=windowWidth/6+windowWidth/15-windowWidth/50;
    x6=x7=x8=windowWidth/6-windowWidth/15;
    let l=windowWidth/6;
    let s=windowWidth/18;
    y1=0+s;
    y2=l/5+s;
    y3=l/5+s;
    y4=l/3+s;
    y5=y6=l/2+s;
    y7=l/3*2+s;
    y8=l/5*4+s;
    y9=l/5*4+s;
    y10=l+s;
    strokeCap(SQUARE);
    bezier(x1,y1,x2,y2,x3,y3,x4,y4)
    strokeCap(ROUND); 
    bezier(x4,y4,x5,y5,x6,y6,x7,y7)
    strokeCap(SQUARE); 
    bezier(x7,y7,x8,y8,x9,y9,x10,y10)
    textSize(windowHeight/60)
    strokeWeight(0)
    fill(150)
    textSize(windowWidth*windowHeight/70000);
    textStyle(ITALIC);
    text("nome", windowWidth/3-2*windowWidth/7.1, windowWidth/15);
    text("Superficie", windowWidth/3-windowWidth/4.1, windowWidth/3-windowWidth/32);
    text("Portata", windowWidth/7.1, windowWidth/3-windowWidth/15);
    text("Temperatura media", windowWidth/3-2*windowWidth/7.4, windowWidth/2.75);
    fill("white");
    textSize(windowWidth*windowHeight/80000);
    text("-7,5°", windowWidth/3-2*windowWidth/7.6, windowWidth/2.53);
    text("27,5°", windowWidth/3-2*windowWidth/18, windowWidth/2.53);
    fill(150);
    push();
    rotate(270);
    translate(windowWidth/3-windowWidth/15, windowWidth/3-windowWidth/9.1);
    text("Lunghezza", - windowWidth/3-windowWidth/6.4, windowWidth/3-windowWidth/3.5);
    pop();
  }

//****************************************************************************************************************** COLORE FIUME */

  function colorFunction(temp) {
    let coldColor = color(0, 19, 163);
    let warmColor = color(133, 147, 255); 
    let normalizedTemp = map(temp, -7.5, 27.5, 0, 1);
    return lerpColor(coldColor, warmColor, normalizedTemp);
  }

//****************************************************************************************************************** GRADIENTE */

  // Funzione per il disegno di gradienti lineari, radial e conici
function fillGradient(type = 'linear', props = {}) {
  // Parametri di default per i vari tipi di gradiente
  let _defaults = {
    'linear': {
      from: [0, 0], // x, y
      to: [width, height], // x, y
      steps: [color(255), color(0, 96, 164), color(0)] // Array di colori
    },
    'radial': {
      from: [width / 2, height / 2, 0], // x, y, radius
      to: [width / 2, height / 2, Math.max(width / 2, height / 2)], // x, y, radius
      steps: [color(255), color(0, 96, 164), color(0)] // Array di colori
    },
    'conic': {
      from: [width / 2, height / 2, 90], // x, y, angle in gradi
      steps: [color(255), color(0, 96, 164), color(0)] // Array di colori
    }
  };

  // Impostazione del tipo di gradiente, con fallback a 'linear'
  let _type = type.toLowerCase();
  _type = _defaults[_type] ? _type : 'linear';

  // Unione dei parametri di default con quelli passati dalla funzione
  let _props = Object.assign({}, _defaults[_type], props);

  // Creazione del gradiente in base al tipo
  let _gradient;
  if (_type === 'linear') {
    _gradient = drawingContext.createLinearGradient(
      _props.from[0], _props.from[1], _props.to[0], _props.to[1]
    );
  } else if (_type === 'radial') {
    _gradient = drawingContext.createRadialGradient(
      _props.from[0], _props.from[1], _props.from[2],
      _props.to[0], _props.to[1], _props.to[2]
    );
  } else if (_type === 'conic') {
    _gradient = drawingContext.createConicGradient(
      radians(_props.from[2]), _props.from[0], _props.from[1]
    );
  }

  // Aggiunta dei colori e delle posizioni nel gradiente
  _props.steps.forEach((step, i) => {
    let _step = Array.isArray(step) ? step : [step]; // Gestisce i singoli valori o array di valori
    let _stop = _step[1] || (i / (_props.steps.length - 1)); // Imposta la posizione del colore nel gradiente
    _stop = Math.min(1, Math.max(0, _stop)); // Limita il valore tra 0 e 1
    _gradient.addColorStop(_stop, _step[0]);
  });

  // Imposta il gradiente come `fillStyle`
  drawingContext.fillStyle = _gradient;
}
