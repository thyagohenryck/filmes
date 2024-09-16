let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("green");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(2, 50, 80));
  textAlign(CENTER, CENTER);
  textSize(50);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 16) {
      return "O espetacular homem aranha";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Rei Leão";          
        } else{
         return "Meu malvado favorito 4";
        }
      } else {
        if (gostaDeFantasia) {
          return "Divertidamente 2";
        } else {
          return "A expedição ao centro da Terra";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Cavaleiros do zodiaco a lenda do santuario";
    } else {
      return "Dragon ball super broly o filme";
    }
  }
}