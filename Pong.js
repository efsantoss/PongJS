let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


function setup() {
  createCanvas(600, 400);
}

function draw(){
  background(0);
  //circle(0, 0, 50); //x= 0, y= 0, diametro= 50
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXBolinha; // ou xBolinha = + velocidadeXBolinha
  yBolinha += velocidadeYBolinha;
  
  if (xBolinha > width || xBolinha < 0){ //se a bolinha bater na borda volte
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha > height || yBolinha < 0){
    velocidadeYBolinha *= -1;
  }
}