class LineaPrincipal{
    constructor(margenX,margenY){
        this.x1 = random(margenX, width-margenX);
        this.x2 = random(margenX, width-margenX);
        this.y1 = random(margenY, (height/4)-margenY);
        this.y2 = random((height/4)*3, height-margenY);
    }

    dibujar(){
        push();
        stroke(0);
        pop();

        line(this.x1, this.y1, this.x2, this.y2);
    
    }
}