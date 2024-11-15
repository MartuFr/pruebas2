class juego {
  constructor() {
    this.crearEnemigo();
    this.crearPersonaje();
    this.crearFondo();
       
  }

  tiempo() {
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
  

  iniciar() { //restablecer las posiciones y atributos para el reiniciio(?
  }
  
 crearFondo() {
    this.fondo = new fondo(); //dentro del juego, no variable del programa principal. Objeto de class enemigo
  }
  
  crearEnemigo() {
    this.enemigo = new enemigoJinx(150, 20); //dentro del juego, no variable del programa principal. Objeto de class enemigo
  }

  crearPersonaje() {
    this.personaje = new personajeVi(285, 320); //dentro del juego, no variable del programa principal. Objeto de class personaje
  }

verificarColision() {
    if (!this.personaje.vida) return; // Si el personaje ya no tiene vida, no verificamos colisiones
  // Verificamos si hay una bala activa disparada por el enemigo
  if (this.enemigo.bala !== null) {
    let bala = this.enemigo.bala; // Acceso rápido a la bala activa del enemigo
    let personaje = this.personaje; // Acceso rápido al personaje Vi

    // Comprobamos si la posición de la bala está dentro de los límites del personaje
    if (bala.posX > personaje.posX && bala.posX < personaje.posX + personaje.imagen.width &&
        bala.posY > personaje.posY && bala.posY < personaje.posY + personaje.imagen.height) {
      // Si hay colisión, la vida del personaje se cambia a false
      personaje.vida = false;
      this.enemigo.bala = null; // Eliminamos la bala después de la colisión
    }
  }
}
  teclaPresionada(keyCode){
    this.personaje.teclaPresionada(keyCode);
  }
}
