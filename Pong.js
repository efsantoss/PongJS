//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 4;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let lengthRaquete = 10;
let highRaquete = 90;


function setup() {
  createCanvas(600, 400);
}

//função para oque aparece na view
function draw(){
  background(0);
  showBall();
  moveBall();
  edgeCollision();
  showRacket();
  movingRacket();
  racketCollision();
}

function showBall(){
    //circle(0, 0, 50); //x= 0, y= 0, diametro= 50
    circle(xBolinha, yBolinha, diametro);
  }

function moveBall(){
    xBolinha += velocidadeXBolinha; // ou xBolinha = + velocidadeXBolinha
    yBolinha += velocidadeYBolinha;
  }

  function showRacket(){
    rect(xRaquete, yRaquete, lengthRaquete, highRaquete);//x, y, comprimento, altura
  }
  
function movingRacket(){
    if (keyIsDown(UP_ARROW)){
      yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
    }  
  }  

function edgeCollision(){
    if (xBolinha + raio > width || xBolinha - raio < 0){ //se a bolinha bater na borda volte
      velocidadeXBolinha *= -1;
    }
    
    //x da bolinha eh o centro da bolinha ent temos que pegar o raio dela
    //para efetuar de forma eficaz, a batida na borda, sem entrar metade da bolinha
    
    if (yBolinha + raio > height || yBolinha - raio < 0){
      velocidadeYBolinha *= -1;
    }
  }
  
function racketCollision(){
    if (xBolinha - raio < xRaquete + lengthRaquete && yBolinha - raio < yRaquete + highRaquete &&
        yBolinha + raio > yRaquete){
      velocidadeXBolinha *= -1;
    }
  }