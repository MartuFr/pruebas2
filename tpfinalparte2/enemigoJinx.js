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
    if (frameCount % 60 === 0) { // Cada segundo aproximadamente
      this.posX = random(0, width - this.imagen.width);
      this.dispararBalas(); // Dispara una nueva bala al cambiar de posición
  }
  }
  dispararBalas() {
    if (this.bala === null) { // Verifica si no hay una bala activa.  Crea una nueva bala si no hay una ya existente
    let balaPosX = this.posX + this.imagen.width/2- 20; // Empieza en el 20% desde la izquierda de la imagen
    let balaPosY = this.posY + 130; // Un poco más abajo que la posición Y del cañón
    this.bala= new balas(balaPosX, balaPosY); // Crear una nueva bala en la posición calculada
  }
  }
      
      gestionarBalas() {
  if (this.bala !== null) {
      this.bala.dibujar();
      this.bala.mover();

      // Si la bala sale de la pantalla, se elimina
      if (this.bala.posY > height) {
        this.bala = null; // Eliminar la bala. permitirá disparar otra.
      }
    }
  }
  
}
  
