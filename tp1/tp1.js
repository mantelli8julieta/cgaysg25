//OJO QUE HAY MUCHO CÓDIGO COMENTADO DE LO QUE INTENTÉ HACER PARA CALIBRAR EL SONIDO, IGNÓRENLO

//variables
let micro; //input del micrófono
let fft; // function for threshold 
let micActivo = false;
let intensidad; //variable que va a contener qué tan fuerte es el sonido
let calibracion; //si se está ejecutando la calibración o no
let calibrador; //objeto calibrador

let ampMin; //amplitud mínima para que se registre el sonido
let ampMax; //amplitud máxima de sonido que va a registrar

let margenYV;
let margenYH;
let margenXV;
let margenXH;


let cantLineasH;
let lineasH = [];

let cantLineasV;
let lineasV = [];

let ramasGen = []; //array que va a contener las ramas nuevas que se generen

//let lineasH;

/*function preload(){
let rama1 = loadImage('imgs/rama1.png');
let rama2 = loadImage('imgs/rama2.png');  
let rama3 = loadImage('imgs/rama3.png');
}
*/

function setup() {
  createCanvas(900, 900); //usamos el tamaño de la ventana

fft = new p5.FFT();

/*imgRamas[0] = loadImage('imgs/rama1.png');
imgRamas[1] = loadImage('imgs/rama2.png');    
imgRamas[2] = loadImage('imgs/rama3.png');
*/

  cantLineasV = floor(random(1, 2));
  cantLineasH = floor(random(2, 5));

  margenXV = width/3;
  margenYV = 100;

  margenXH = width/4;
  margenYH = height/4;

  ampMin = 0;

  micro = new p5.AudioIn(); //carga el input de sonido a micro
  micro.start(); //inicializa el micrófono

  //se crean las líneas verticales
  for (let i = 0; i < cantLineasV; i++){
    lineasV[i] = new LineaPrincipal(margenXV,margenYV);
  }
 
  //se crean las líneas horizontales
  for (let i = 0; i < cantLineasH; i++){
    lineasH[i] = new LineaHorizontal(margenXH,margenYH,cantLineasH,i);
  }

lineasV.push({



})

  calibracion = false;
  calibrador = new Calibrador(micro,ampMin);

  //lineasH = floor(random(1, 3));

}

function draw() {

    if (!micActivo) return;

  let vol = mic.getLevel();
  let spectrum = fft.analyze();
  let graves = fft.getEnergy("bass");
  let agudos = fft.getEnergy("treble");

  //parámetros para la clase de ramas nuevas
let baseX1 = lineasV[0].x1;
let baseX2 = lineasV[0].x2;
let baseY1 = lineasV[0].y1;
let baseY2 = lineasV[0].y2;
let angBase = lineasV[0].angulo;

  if (calibracion == true){
    calibrador.interfaz();
  }else{
    background(50,100,100);

    //se dibujan las líneas verticales
    for(let i = 0; i < cantLineasV; i++){
      lineasV[i].dibujar();
    }

    //se dibujan las líneas verticales
    for(let i = 0; i < cantLineasH; i++){
      lineasH[i].dibujar();
    }

      if (vol > threshold) {
    for (let v of lineasV) {
      ramasGen.push(new RamasNuevas(v.x2, v.y2, vol, graves, agudos));
    }

     for (let i = ramasGen.length - 1; i >= 0; i--) {
    ramas[i].dibujar();
    if (ramas[i].terminada()) ramas.splice(i, 1);
  }

  }
}

//console.log("la línea 1 empieza en " + lineasH[0].x1 + " y " + lineasH[0].x2 + " y termina en " + lineasH[1].y1 + " y " + lineasH[1].y2);
//console.log("mousex es " + mouseX + " y mouseY es " + mouseY);
}

function keyPressed(){
  //si se presiona la c en el teclado cambia del programa al calibrador
  if (key=='c'||key=='C'){
    if(calibracion == true){
      calibracion = false;
    }else{
      calibracion = true;
    }
  }

  if(keyCode===ENTER){
    //calibrador.desactivarBotonMin();  
  }
  
  if(key >= '0' && key <= '9' || key=== '.'){
    //calibrador.ingresarValorMin(key);
  }
}

function mousePressed(){
  //calibrador.activarBotonMin();

  //voy a probar la generación d las ramas nuevas con clicks pq no me doy idea de como integrarlo con el input del mic :p
  //input 1: generación de ramas sobre la primer línea base vertical


}


/*recreación de la función map d processing para facilitarnos generar las ramas
function mapeado(value, start1, stop1, start2, stop2) 
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));}
*/
  