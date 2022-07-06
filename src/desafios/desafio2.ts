// Como podemos melhorar o esse código usando TS? 

enum ProfissaoDesafio {
  Padeiro,
  Atriz
}

interface PessoaDesafio {
  nome: string,
  idade: number,
  profissao?: ProfissaoDesafio,
}

const pessoa1: PessoaDesafio = {
  nome: "maria",
  idade: 29,
  profissao: ProfissaoDesafio.Atriz,
}

const pessoa2: PessoaDesafio = {
  nome: "roberto",
  idade: 19,
  profissao: ProfissaoDesafio.Padeiro,
}

const pessoa3: PessoaDesafio = {
  nome: "laura",
  idade: 32,
  profissao: ProfissaoDesafio.Atriz,
}

const pessoa4: PessoaDesafio = {
  nome: "carlos",
  idade: 19,
  profissao: ProfissaoDesafio.Padeiro,
}