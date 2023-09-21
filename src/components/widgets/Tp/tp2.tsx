import React from 'react';


class Autos {
  marca: string;
  modelo: string;
  potencia: number;
  maxVelocidad: number;
  constructor(marca: string, modelo: string, potencia: number, maxVelcidad: number){
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
    this.maxVelocidad = maxVelcidad
  }


  calcularTiempo(distancia: number): string {
    const tiempo = distancia / this.maxVelocidad;
    return tiempo.toFixed(2);
  }
}


const a1 = new Autos ('Fiat','600',300,250);
const a2 = new Autos ('ford','F100',100,50);
const autos: Autos[] = [];

autos.push(a1, a2)

function AutoComponent() {
  return(
    <div>
    <h1>Autos</h1>
    {autos.map((auto, index) => (
      <div key={index}>
        <h3>{`${auto.marca} ${auto.modelo}`}</h3>
        <p>Potencia: {auto.potencia}</p>
        <p>Max. Velocidad: {auto.maxVelocidad}</p>
      </div>
    ))}

    <h1>Tiempo de recorrido</h1>
    {autos.map((auto, index) => (
      <div key={index}>
        <h3>{`${auto.marca} ${auto.modelo}`}</h3>
        <p>Tiempo para recorrer 100 kms: {auto.calcularTiempo(100)} horas</p>
        <p>Tiempo para recorrer 200 kms: {auto.calcularTiempo(200)} horas</p>
        <p>Tiempo para recorrer 300 kms: {auto.calcularTiempo(300)} horas</p>
      </div>
    ))}
  </div>
  )
}

export default AutoComponent;
