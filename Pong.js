let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;



function setup() {
  createCanvas(600, 400);
}

function draw(){
  background(0);
  showBall();
  moveBall();
  checkCollision();
}

function showBall(){
  //circle(0, 0, 50); //x= 0, y= 0, diametro= 50
  circle(xBolinha, yBolinha, diametro);
}

function moveBall(){
  xBolinha += velocidadeXBolinha; // ou xBolinha = + velocidadeXBolinha
  yBolinha += velocidadeYBolinha;
}

function checkCollision(){
  if (xBolinha + raio > width || xBolinha - raio < 0){ //se a bolinha bater na borda volte
    velocidadeXBolinha *= -1;
  }
  
  //x da bolinha eh o centro da bolinha ent temos que pegar o raio dela
  //para efetuar de forma eficaz, a batida na borda, sem entrar metade da bolinha
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}