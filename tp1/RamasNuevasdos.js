class RamasNuevas {
  constructor(x, y, vol, graves, agudos) {
    this.x = x;
    this.y = y;
    this.vol = vol;
    this.graves = graves;
    this.agudos = agudos;
    this.segmentos = [];
    this.alpha = 255;
    this.crearRama();
  }

  crearRama() {
    let direccion = -PI / 2 + map(this.agudos - this.graves, -255, 255, PI / 3, -PI / 3);
    let longitud = int(map(this.vol, 0, 0.3, 5, 12));
    let x = this.x;
    let y = this.y;

    for (let i = 0; i < longitud; i++) {
      let ang = direccion + random(-PI / 6, PI / 6);
      let largo = random(15, 40);
      let x2 = x + cos(ang) * largo;
      let y2 = y + sin(ang) * largo;
      this.segmentos.push({
        x1: x,
        y1: y,
        x2: x2,
        y2: y2,
        color: random(colores),
        weight: map(this.vol, 0, 0.3, 1, 5)
      });
      x = x2;
      y = y2;
    }
  }

  actualizar() {
    this.alpha -= 3;
  }

  mostrar() {
    for (let seg of this.segmentos) {
      stroke(seg.color + hex(this.alpha, 2));
      strokeWeight(seg.weight);
      line(seg.x1, seg.y1, seg.x2, seg.y2);
    }
  }

  terminada() {
    return this.alpha <= 0;
  }
}