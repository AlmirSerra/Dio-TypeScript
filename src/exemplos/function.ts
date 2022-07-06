function somarValoresNumericosETratar(a: number, b: number, callback: (numero: number) => number): number {
  let resultado = a + b;
  return callback(resultado);
}

function aoQuadrado(numero: number): number {
  return numero * numero;
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));