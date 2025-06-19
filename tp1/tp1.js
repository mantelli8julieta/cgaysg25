//OJO QUE HAY MUCHO CÓDIGO COMENTADO DE LO QUE INTENTÉ HACER PARA CALIBRAR EL SONIDO, IGNÓRENLO

//variables
let micro; //input del micrófono
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

//let lineasH;


//para la carga d las ramitas a generar
function preloadImg(url)
{
    var imagen=new Imagen(url);
    imagen.src=url;
    return imagen;
}

/*
let myImage = preloadImage('path/to/image.jpg');
document.body.appendChild(myImage); 
^^^ código a usar para llamar a esas imgs:
*/

let rama1 = preloadImg('tp1\imgs\rama1.png');
document.body.appendChild(ramauno); 

let rama2 = preloadImg('tp1\imgs\rama2.png');
document.body.appendChild(ramados); 

let rama3 = preloadImage('tp1\imgs\rama3.png');
document.body.appendChild(ramatres); 

function setup() {
  createCanvas(windowWidth, windowHeight); //usamos el tamaño de la ventana

  cantLineasV = random(1, 2);
  cantLineasH = random(2, 5);

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

  calibracion = false;
  calibrador = new Calibrador(micro,ampMin);

  //lineasH = floor(random(1, 3));

}

function draw() {
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

  }
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
}

//recreación de la función map d processing para facilitarnos generar las ramas

function mapeado(value, start1, stop1, start2, stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));}