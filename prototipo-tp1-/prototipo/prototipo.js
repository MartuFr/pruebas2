/*
TP1-Etapa 2; Prototipo.
 Julia Ferrari, Michelle González,
 Micaela Floch, Lucas Gordillo,
 Pilar Fernández, Martina Furh
 Comisión Matías.
 */
let ufanObjs = [];
let centro;
let cantidadOrb = 14;
let maxRadio = 400; // más separación entre órbitas

let trazos = [];
let cantidad = 4;
let cant = 20; // cantidad de filas y columnas
let size = 40;
let espaciadoX = 50; // espacio horizontal
let espaciadoY = 5; // espacio vertical
let imgWidth = 60;  // angosto
let imgHeight = 20; // alto
let vel = 1;
let estado = "inicial";
let mostrarFilas = []; //arreglo boolean para saber qué filas dibujar

function preload() {
  for (let i = 0; i < cantidad; i++) {
    let ufan = "data/trazo" + nf(i, 2) + ".png";
    trazos[i] = loadImage(ufan);
  }
}

function setup() {
  createCanvas(800, 800);
  centro = createVector(width / 2, height / 2);

  for (let i = 0; i < cant; i++) {
    for (let g = 0; g < cant; g++) {
      let desplazamientoX = (i % 2 === 1) ? imgWidth / 2 : 0;
      let x = g * (imgWidth + espaciadoX) + imgWidth / 2 + desplazamientoX;
      let y = i * (imgHeight + espaciadoY) + imgHeight / 2;

      ufanObjs.push({
        actual: createVector(x, y),
        destino: createVector(x, y),
        angulo: random(TWO_PI),
        radio: 0,
        vel: random(0.01, 0.03),
        i: i,
        g: g,
        trazoIndex: 0
      });
    }
  }

  calcularOrbitas();
  for (let i = 0; i < cant; i++) {
    mostrarFilas[i] = true;
  }
}

function calcularOrbitas() {
  let porOrbita = int(ufanObjs.length / cantidadOrb);
  let index = 0;

  for (let o = 0; o < cantidadOrb; o++) {
    let radio = map(o, 0, cantidadOrb - 1, 50, maxRadio);
    let cantidadEnEsta = porOrbita;
    let angEspaciado = TWO_PI / cantidadEnEsta;

    for (let i = 0; i < cantidadEnEsta && index < ufanObjs.length; i++) {
      let u = ufanObjs[index];
      u.radio = radio;
      u.angulo = i * angEspaciado;
      index++;
    }
  }
}

function draw() {
  background(255);

  for (let u of ufanObjs) {
    let i = u.i;
    let g = u.g;

    if (!mostrarFilas[i]) continue;

    if (estado === "inicial" || estado === "sinfilas") {
      u.actual.x -= vel;

      if (u.actual.x < -imgWidth) {
        let maxX = Math.max(...ufanObjs.filter(obj => obj.i === i).map(obj => obj.actual.x));
        u.actual.x = maxX + imgWidth + espaciadoX;
      }

      let desplazamientoX = (i % 2 === 1) ? imgWidth / 2 : 0;
      u.actual.y = i * (imgHeight + espaciadoY) + imgHeight / 2;
    } else if (estado === "orbita") {
      u.angulo += u.vel;
      let destinoX = centro.x + cos(u.angulo) * u.radio;
      let destinoY = centro.y + sin(u.angulo) * u.radio;
      u.destino.set(destinoX, destinoY);

      // interpolación hacia la órbita
      u.actual.x = lerp(u.actual.x, u.destino.x, 0.1);
      u.actual.y = lerp(u.actual.y, u.destino.y, 0.1);
    }

    push();
    translate(u.actual.x, u.actual.y);
    if (estado === "orbita") {
      rotate(u.angulo + HALF_PI);
    }
    image(trazos[u.trazoIndex], -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);
    pop();
  }

  // Control de estados
  if (keyIsDown(49)) {
    estado = "sinfilas";
    for (let i = 0; i < cant; i++) {
      mostrarFilas[i] = (i % 2 === 0);
    }
  } else if (keyIsDown(50)) {
    estado = "orbita";
  } else {
    estado = "inicial";
    for (let i = 0; i < cant; i++) {
      mostrarFilas[i] = true;
    }
  }
}

 
