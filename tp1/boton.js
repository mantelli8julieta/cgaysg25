class Boton{
  constructor(posX,posY,ancho,alto,txt){
    this.posX = posX;
    this.posY = posY;
    this.alto = alto;
    this.ancho = ancho;
    this.txt = txt;
    this.colorH = color(100,100,100);
    this.colorN = color(200,200,200);
  }
  
  dibujar(){
    push();
    //cambia el color de relleno según si el mouse está dentro del área del botón o no
    if(this.hOver(this.posX,this.posY,this.ancio,this.alto)){
      fill(this.colorH);
    }else{
      fill(this.colorN);
    }
    
    //dibuja el botón
    rect(this.posX,this.posY,this.ancho,this.alto);
    fill(0);
    textAlign(CENTER,CENTER);
    textSize(18);
    text(this.txt, this.posX+(this.ancho/2), this.posY+(this.alto/2));
    pop();
  }
  
  //revisa si el mouse está dentro del área del botón
  hOver(){
    if (mouseX > this.posX && mouseX < this.posX+this.ancho && mouseY > this.posY && mouseY < this.posY+this.alto) {
      return true;
    } else {
      return false;
    }
  }

}