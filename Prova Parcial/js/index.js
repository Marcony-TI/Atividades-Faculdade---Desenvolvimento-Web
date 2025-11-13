function Nome() {
  let nome = prompt("Digite seu nome: ");
  document.getElementById("saida1").innerText =
    nome + " Bem-vindo a Prova Parcial";
}

function msgCustom() {
  let nome = prompt("Digite seu nome: ");
  let idade = prompt("Digite sua idade: ");
  let cidade = prompt("Digite sua cidade: ");
  let msg =
    "Sou " + nome + ", tenho " + idade + " anos e moro em " + cidade + ".";
  document.getElementById("saida2").innerText = msg;
}

function operacaoMat() {
  let n1 = prompt("Digite o primeiro número: ");
  let n2 = prompt("Digite o segundo número: ");
  let a = Number(n1);
  let b = Number(n2);

  let operacoes = [];
  operacoes.push(a + " + " + b + " = " + (a + b));
  operacoes.push(a + " - " + b + " = " + (a - b));
  operacoes.push(a + " * " + b + " = " + a * b);
  operacoes.push(a + " / " + b + " = " + a / b);
  document.getElementById("saida3").innerText = operacoes.join("\n");
}

function idade() {
  let idade = prompt("Digite sua idade: ");
  if (idade >= 18) {
    document.getElementById("saida4").innerText = "Você é maior de idade";
  } else {
    document.getElementById("saida4").innerText = "Você é menor de idade";
  }
}

function cargos() {
  let cargo = ["Gerente", "Padeiro", "Vendedor", "Motorista"];
  document.getElementById("saida5").innerText = cargo.join("\n");
}
