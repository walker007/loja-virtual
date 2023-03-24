function insereOfertas() {
  var listaOfertas = document.getElementsByClassName("lista-ofertas")[0];
  var modelo = document.getElementById("card-modelo");
  var ofertas = [
    {
      url: "/produto.html",
      img: "imgs/headphone.webp",
      imgDescription: "Fones da marca JBL de cor vermelha",
      titulo: "Headphones JBL ",
      preco: 89.98,
    },
    {
      url: "/produto.html",
      img: "imgs/headphone.webp",
      imgDescription: "Fones da marca JBL de cor vermelha",
      titulo: "Headphones JBL ",
      preco: 89.98,
    },
    {
      url: "/produto.html",
      img: "imgs/headphone.webp",
      imgDescription: "Fones da marca JBL de cor vermelha",
      titulo: "Headphones JBL Bluetooh",
      preco: 89.98,
    },
    {
      url: "/produto.html",
      img: "imgs/headphone.webp",
      imgDescription: "Fones da marca JBL de cor vermelha",
      titulo: "Headphones JBL ",
      preco: 89.98,
    },
  ];

  ofertas.forEach(function (produto) {
    var variaveis = {
      "{link-produto}": "url",
      "{imagem-produto}": "img",
      "{descricao-imagem-produto}": "imgDescription",
      "{titulo-produto}": "titulo",
      "{preco-produto}": "preco",
    };

    var modeloString = modelo.innerHTML;

    for (var variavel in variaveis) {
      modeloString = modeloString.replaceAll(
        variavel,
        produto[variaveis[variavel]]
      );
    }

    listaOfertas.innerHTML += modeloString;
  });
}

function main() {
  insereOfertas();
}
