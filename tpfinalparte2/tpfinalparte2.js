let objJuego; //variable objeto tipo juego con las características de la class, declaro un objeto y lo inicializo con mi clase.
let imagen = [];
let texto = [];
let boton=[];
let miFuente;
let estado="juego";
let tiempoinicio;
let tiempolimite=10000

  function preload() {
  for (let i=0; i<3; i++) {
    imagen[i] = loadImage("data/imagen"+i+".png");
  }
  for (let a=0; a<2; a++) {
    boton[a] = loadImage("data/boton"+a+".png");
  }
  texto = loadStrings('data/textosjuego.txt');
  miFuente = loadFont('data/ArcaneFuente.otf');
}

function setup() {
  createCanvas (640, 480);
  textFont(miFuente);
  tiempoinicio=millis();
  objJuego = new juego();
  imagen[2].resize (60, 140);
  imagen[1].resize(260, 160);
}


function draw() {
  background (200);

  if (estado==="juego") {
    objJuego.dibujar();

    let tiempopaso = millis()-tiempoinicio;
    if (tiempopaso>=tiempolimite) {
      estado="ganaste";
    }
  } else if (estado==="perder") {
    mostrarPantallaPerdiste();
  } else if (estado==="ganaste") {
    mostrarPantallaGanaste();
  }
}
function mostrarPantallaPerdiste() {
  background(255, 0, 0);
  fill(0)
    textSize(22);

  cargaBotones(boton[1], 320, 240, 100, 50, CENTER);
  text(texto[0], 10, 30, 360);
  text(texto[1], 10, 30, 360);
  text(texto[4], 10, 30, 360);
  text(texto[5], 10, 30, 360);
}
function mostrarPantallaGanaste() {
  background(177,182,136);
  fill(0);
  textSize(22);

  cargaBotones(boton[1], 320, 240, 230, 60, CENTER);
  text(texto[0], 10, 440, 360);
  text(texto[1], 10,30, 360);
  text(texto[3], 190, 300, 360);
  textSize(100);
  text(texto[2], 150, 200, 360);
  
}

function cargaBotones(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag, x, y, ancho, alto);
}
function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}

function mousePressed() {
  if (estado === "ganaste" && detectarBoton(270, 215, 100, 50)) {
    reiniciarJuego();
  } else if (estado === "perder" && detectarBoton(270, 215, 100, 50)) {
    reiniciarJuego();
  }
}

function reiniciarJuego() {
  estado = "juego";
  tiempoinicio = millis();
  objJuego = new juego();
  
}


function keyPressed() {
  objJuego.teclaPresionada(keyCode); //al juego y del juego al personaje
}
