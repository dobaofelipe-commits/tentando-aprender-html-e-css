function calcular() {
  let pontos = document.getElementById("pontos").value;
  let jogos = document.getElementById("jogos").value;

  // transformar em número
  pontos = Number(pontos);
  jogos = Number(jogos);

  if (jogos === 0) {
    document.getElementById("resultado").innerText = "Jogos não pode ser 0";
    return;
  }

  let aproveitamento = (pontos / (jogos * 3)) * 100;

  document.getElementById("resultado").innerText =
    "Aproveitamento: " + aproveitamento.toFixed(2) + "%";
}

const times = [
  { pos: 1, nome: "São Paulo", pontos: 16, jogos: 6 },
  { pos: 2, nome: "Palmeiras", pontos: 13, jogos: 6 },
  { pos: 3, nome: "Fluminense", pontos: 13, jogos: 6 },
  { pos: 4, nome: "Bahia", pontos: 11, jogos: 5 },
  { pos: 5, nome: "Flamengo", pontos: 10, jogos: 5 },
  { pos: 6, nome: "Coritiba", pontos: 10, jogos: 6 },
  { pos: 7, nome: "Gremio", pontos: 8, jogos: 6 },
  { pos: 8, nome: "Corinthians", pontos: 8, jogos: 6 },
  { pos: 9, nome: "Bragantino", pontos: 8, jogos: 6 },
  { pos: 10, nome: "Atletico-PR", pontos: 7, jogos: 5 },
  { pos: 11, nome: "Vitoria", pontos: 7, jogos: 5 },
  { pos: 12, nome: "Chapecoense", pontos: 6, jogos: 5 },
  { pos: 13, nome: "Mirasol", pontos: 6, jogos: 5 },
  { pos: 14, nome: "Santos", pontos: 6, jogos: 6 },
  { pos: 15, nome: "Vasco da Gama", pontos: 5, jogos: 6 },
  { pos: 16, nome: "Atletico-MG", pontos: 5, jogos: 6 },
  { pos: 17, nome: "Botafogo", pontos: 3, jogos: 4 },
  { pos: 18, nome: "Remo", pontos: 3, jogos: 6 },
  { pos: 19, nome: "Cruzeiro", pontos: 3, jogos: 6 },
  { pos: 20, nome: "Internacional", pontos: 2, jogos: 6 },
];

// pega o tbody
const tabela = document.getElementById("corpo-tabela");

let html = "";

// percorre os times
times.forEach(time => {
  let classe = "";

  // define G4 e Z4
  if (time.pos <= 4) {
    classe = "g4";
  } else if (time.pos >= 17) {
    classe = "z4";
  } else if (time.pos >=7 && time.pos<=11){
    classe="g11";
  } else if (time.pos<=6 && time.pos>=5) {
    classe ="g6"
  }

  html += `
    <tr class="${classe}">
      <td>${time.pos}</td>
      <td>${time.nome}</td>
      <td>${time.pontos}</td>
      <td>${time.jogos}</td>
    </tr>
  `;
});

// coloca no HTML
tabela.innerHTML = html;