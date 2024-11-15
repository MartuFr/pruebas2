class personajeVi {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = true; //se dibuja o no
    this.imagen = imagen[2];
  }

  dibujar() {
    if (this.vida) { //se dibuja o no
      image(this.imagen, this.posX, this.posY);
    }
  }

  esquivarDerecha() {
    this.posX += 15;
  }

  esquivarIzquierda() {
    this.posX -= 15;
  }

  limitarizq() {
    if (this.posX<0) {
      this.posX = 0
    }
  }

  limitardere() {
    if (this.posX>640-this.imagen.width) {
      this.posX = 640 -this.imagen.width;
    }
  }

  verificarColisionConBala(bala) {
    return (
      bala.posX > this.posX &&
      bala.posX < this.posX + this.imagen.width &&
      bala.posY > this.posY &&
      bala.posY < this.posY + this.imagen.height
      );
  }

  teclaPresionada(keyCode) { //hay indicaciones en otras partes del programa como el juego y recien aca hacen algo. Toda la cadena se va delegando hasta que alguien hace algo con esto
    if (keyCode == LEFT_ARROW) {
      this.esquivarIzquierda ();
    } else if (keyCode == RIGHT_ARROW) {
      this.esquivarDerecha ();
    }

    this.limitarizq();
    this.limitardere();
  }
}
