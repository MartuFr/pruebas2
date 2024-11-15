class juego {
  constructor() {
    this.crearEnemigo();
    this.crearPersonaje();
    this.crearFondo();
  }


  dibujar() {
    this.fondo.dibujar();
    this.personaje.dibujar();
    this.enemigo.dibujar();
    this.enemigo.mover();
    this.enemigo.dispararBalas();
    this.enemigo.gestionarBalas();
    this.verificarColision();
  }


  crearFondo() {
    this.fondo = new fondo();
  }

  crearEnemigo() {
    this.enemigo = new enemigoJinx(150, 20); //dentro del juego, no variable del programa principal. Objeto de class enemigo
  }

  crearPersonaje() {
    this.personaje = new personajeVi(285, 320); //dentro del juego, no variable del programa principal. Objeto de class personaje
  }

  verificarColision() {
    if (!this.personaje.vida) return;

    if (this.enemigo.bala !== null) {
      if (this.personaje.verificarColisionConBala(this.enemigo.bala)) {
        this.personaje.vida = false;
        this.enemigo.bala = null;
      }
    }
  }
  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
}
