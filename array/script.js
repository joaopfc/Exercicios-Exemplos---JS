//var videoGame = ["PS2", "PS3", "PS4", "Xbox"];

// var ultimoItem = videoGame.pop(); /// Remove o Ultimo item

// videoGame.push("3DS"); // Adiciona no Final do Array

// videoGame.length; // Ver quantos itens tem

//var videoGame = ["PS2", "PS3", "PS4", "Xbox"];

// for (var item = 0; item < videoGame.length; item++) {
//   console.log(videoGame[item]);
//   if (videoGame[item] === "PS4") {
//     break;
//   }
// }

//For Each

// var frutas = ["maça", "banana", "pessego", "Uva", "Laranja"];

// frutas.forEach(function (fruta) {
//   console.log(fruta);
// });

//Exercicio

var anos = [1959, 1962, 1970, 1994, 2002];

anos.forEach(function (ano) {
  console.log(`O Brasil ganhou a copa de ${ano}`);
});

var frutas = ["banana", "maça", "pera", "Uva", "melância"];

for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);

  if (frutas[fruta] === "pera") {
    break;
  }
}

var ultimaFruta = frutas[frutas.length - 1];
