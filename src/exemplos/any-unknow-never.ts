let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = "testando";
anyEstaDeVolta = 5;

let stringTeste: string = 'verificar';
stringTeste = anyEstaDeVolta;

let unknowValor: unknown;
unknowValor = 3;
unknowValor = 'Olaaaa';
unknowValor = true;

let stringTeste2: string = 'Vamos testar';

if(typeof unknowValor === 'string') {
  stringTeste2 = unknowValor;
}

function jogaErro(erro: string, codigo: number): never{
  throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500);