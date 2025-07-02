class LineaHorizontal{
    constructor(margenX,margenY,cantLineas,numLinea){
        this.x1 = random(margenX, width/2);
        this.x2 = random(width/2, width-margenX);
        this.y1 = random(numLinea*100, numLinea*120);
        this.y2 = random(numLinea*100, numLinea*120);
        this.angulo =  atan2(this.y2 - this.y1, this.x2 - this.x1)
         //no es el ángulo real pero se precisa para indicarle donde generarse a la rama nueva
    }

    dibujar(){
        push();
        stroke(0);
        pop();
        line(this.x1, this.y1, this.x2, this.y2);
    }
    

}