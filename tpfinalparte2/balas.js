class balas {
  constructor(posX, posY) {
    this.posX = posX; //posX 283
    this.posY= posY; //posY 135
    this.diam = 14;
    this.vel = 6; //velocidad
  }

  dibujar() {
    noStroke();
    fill(200,105,255);
    ellipse(this.posX, this.posY, this.diam, this.diam);
    }


mover(){
  this.posY += this.vel;

}
}
