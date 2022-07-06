let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adicionarNumeros(a: number, b: number, devePrintar: boolean, frase: string) {
  let resultado = a + b;
  if (devePrintar){
    console.log(frase + resultado);
  }
  return a + b;
}

let devePrintar = true;
let frase = 'O Valor é: ';

if (button){
  button.addEventListener('click', () => {
    console.log(adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
  });

}