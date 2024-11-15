class balas {
  constructor(posX, posY) {
    this.posX = posX; 
    this.posY= posY; 
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
