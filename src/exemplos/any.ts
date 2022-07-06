let valorAny: any;
valorAny = 3;
valorAny = "Qualquer coisa";
valorAny =  false;

let valorString: string = "teste";
valorString = valorAny;
let valorString2 = valorAny;

function somarStrings(string: string, string2: string) {
  console.log(string + string2);
}

somarStrings(valorString, valorString2);
somarStrings('Ola ', 'como vai?');