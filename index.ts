// types
// interfaces

import { If } from "discord.js";

// interface IAnimal {
//   nome: string;
//   tipo: 'terrestre' | 'aquático';
//   executarRugido(alturaEmDecibeis: number): void;
// }

// const animal: IAnimal = {
//   nome: 'Leão',
//   tipo: 'terrestre',
//   executarRugido: (alturaEmDecibeis) => ('${alturaEmDecibeis}dB')
// }

// interface IFelino extends IAnimal {
//   visaoNoturna: boolean;
// }

// animal.executarRugido(1);

// const felino: IFelino = {
//   nome: 'Leão',
//   tipo: 'terrestre',
//   visaoNoturna: true,
// }

type IAnimal = {
  nome: String,
  tipo: 'terrestre',
  domestico: boolean,
}

interface ICanino extends IAnimal{
  porte: 'pequeno' | 'médio' | 'grande';
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}


type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
  domestico: true,
  porte: 'médio',
  nome: 'Cachorro',
  tipo: 'terrestre',
  visaoNoturna: true
}

// function soma(a: number, b: number) {
//   return a + b;
// }
