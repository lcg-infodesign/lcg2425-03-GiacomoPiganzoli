
let data, nome, lunghezza, superficie, portata, temperatura;

let x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,x9,y9,x10,y10;

function preload(){
  data = loadTable("Assets/rivers-data.csv", "csv", "header");
}

function setup() {
  let height=0;
  for (let j = 0; j < data.getRowCount(); j++) {
  let value = int(data.getString(j, "length"));
  height += value;};
  console.log(height);
  textFont("Helvetica");
  createCanvas(windowWidth, height/(windowWidth/182)+(windowWidth/50)*101);
  noLoop()
  }

function draw(){
  disegnaLegenda();
  grid();//*************************************************************DA ELIMINARE
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

function disegnaFiume(nome,lunghezza, superficie, portata, color,){
  strokeWeight(1);
  stroke(150)
  line( windowWidth/3, 0, windowWidth-windowWidth/30, 0)
  noFill();
  stroke(color);
  strokeWeight(windowWidth/100+portata/(windowWidth*2));
  x1=x2=x9=x10=windowWidth/3*2;
  x3=x4=x5=windowWidth/3*2-superficie/(windowWidth*8);
  x6=x7=x8=windowWidth/3*2+superficie/(windowWidth*8);
  let num=random(10)
  if(num<5){
    x3=x4=x5=windowWidth/3*2+superficie/(windowWidth*8);
    x6=x7=x8=windowWidth/3*2-superficie/(windowWidth*8);
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
  textSize(windowHeight/60)
  strokeWeight(0)
  fill(150)
  text(nome, windowWidth/3, windowHeight/30)
  }

  function sposta(){
    translate(0,lunghezza/(windowWidth/180)+windowWidth/50);
  }

  function disegnaLegenda(){
    strokeWeight(1);
    stroke(150);
    rect(windowWidth/30,windowWidth/30,windowWidth/3-windowWidth/10,windowWidth/3-windowWidth/10,windowWidth/50);
    stroke(150);
    line(windowWidth/20, windowWidth/18, windowWidth/3-2*windowWidth/20, windowWidth/18);
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
    textSize(windowHeight/70)
    strokeWeight(0)
    fill(150)
    text("nome", windowWidth/30*2, windowWidth/30*2);
  }

  function colorFunction(temp) {
    let coldColor = color(0, 19, 163);
    let warmColor = color(133, 147, 255); 
    let normalizedTemp = map(temp, -7.5, 27.5, 0, 1);
    return lerpColor(coldColor, warmColor, normalizedTemp);
  }

  function grid(){
    stroke(10);
    strokeWeight(5);
    line(windowWidth/3,0,windowWidth/3, windowHeight);
    line(windowWidth/6,0,windowWidth/6, windowHeight);
    line(windowWidth/3*2,0,windowWidth/3*2, windowHeight);
  }