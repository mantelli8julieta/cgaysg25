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

//ola recién entro. que agregaste del otro archivo hasta ahora?
//si lo ejecutás ahí vas a ver q parece como los teles viejos a, xq se dibujan una y otra
//vez las lineas en distuntas posiciones

//lo q se me ocurrió es crear las líneas como objetos en un arreglo, y q cada línea tenga
//un atributo x, un atributo y y así,,, no sé si me explico

// sisisi, creo q en el otro programa el cpodigo q generé ttrataba d hacer lo mismo

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