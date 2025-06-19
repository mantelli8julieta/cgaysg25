// clase para las ramas q van a generarse en base a los atributos d las lineas horizontales
class RamasNuevas{
constructor(baseX, baseY, angBase, imgRamas){
this.posX = baseX;
this.posY = baseY;
this.largo = random(50, 100);
this.rama = random(imgRamas);
this.angulo = (angBase + random(-PI/4, PI/4));
}

generarRama(imgRamas){
push();
translate(this.posX, this.posY);
rotate(this.angulo);
imageMode(CENTER);
image(this.rama, 0, 0, this.largo, this.largo);
pop(); 
}
}


