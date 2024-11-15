class enemigoJinx {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.imagen = imagen[1];
    this.bala = null;
  }

  dibujar() {
    image(this.imagen, this.posX, this.posY);
  }

  mover() {
    if (frameCount % 60 === 0) { // Cada 60frames(1 segundo aprox)
      this.posX = random(0, width - this.imagen.width);//cambia posicion a lugar random en X
      this.dispararBalas(); // Dispara una nueva bala al cambiar de posición
    }
  }
  dispararBalas() {
    if (this.bala === null) { //si no hay una bala ya dispara otra
      let balaPosX = this.posX + this.imagen.width/2- 20;
      let balaPosY = this.posY + 130; // para que bala salga por debajo de cañon
      this.bala= new balas(balaPosX, balaPosY); // crea la bala teniendo en cuenta la posx e y
    }
  }

  gestionarBalas() {
    if (this.bala !== null) { // si la bala no esta eliminada se dibuja y mueve
      this.bala.dibujar();
      this.bala.mover();

      // Si la bala sale de la pantalla, se elimina
      if (this.bala.posY > height) {
        this.bala = null; // elimina bala para q se pueda dibujar otra
      }
    }
  }
}
