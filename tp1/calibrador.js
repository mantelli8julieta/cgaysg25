class Calibrador{
    constructor(microfono, amp_min){
        this.microfono = microfono;
        this.amplitud = this.microfono.getLevel();
        //this.ampMax = amp_max;
        this.ampMin = amp_min;
        //this.botonVMaximo = new Boton(250,100,100,50,this.ampMax);
        this.botonVMinimo = new Boton(250,150,100,50,this.ampMin);
        this.botonMinActivado = false;
    }

    interfaz(){
        background(0);

        this.amplitud = this.microfono.getLevel(); //asigna la amplitud del sonido a intensidad

        textSize(20);
        fill(255);
        text("Intensidad:"+ nfc(this.amplitud, 8), 50, 50 );
        /*text("Volumen máximo:",50,125);
        this.botonVMaximo.dibujar();*/
        text("Volumen mínimo:",50,175);
        this.botonVMinimo.dibujar();

        }
    
    /*desactivarBotonMin(){
        if(this.botonMinActivado===true){
           this.botonMinActivado=false; 
        }
    }

    activarBotonMin(){
        if(this.botonVMinimo.hOver===true && this.botonMinActivado===true){
            this.botonMinActivado=true;
        }
    }

    ingresarValorMin(key){
        if(this.botonMinActivado===true){
            this.ampMin=this.ampMin+key;
        }
    }*/
}