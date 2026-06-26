document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // CARROSSEL 1: INGRESSOS (SHOWS EM DESTAQUE)
  // ==========================================
  const slidesIngresso = document.querySelectorAll(".item");
  const pontos = document.querySelectorAll(".ponto");
  const botaoAnterior = document.getElementById("botaoAnterior");
  const botaoProximo = document.getElementById("botaoProximo");
  const recipienteIngresso = document.querySelector(".recipiente-ingresso");

  let indiceIngresso = 0;
  let temporizadorIngresso = null;

  function atualizarCarrosselIngresso(indice) {
    slidesIngresso.forEach((slide) => slide.classList.remove("ativo"));
    pontos.forEach((ponto) => ponto.classList.remove("ativo"));

    if (indice >= slidesIngresso.length) indiceIngresso = 0;
    else if (indice < 0) indiceIngresso = slidesIngresso.length - 1;
    else indiceIngresso = indice;

    slidesIngresso[indiceIngresso].classList.add("ativo");
    pontos[indiceIngresso].classList.add("ativo");
  }

  function proximoIngresso() {
    atualizarCarrosselIngresso(indiceIngresso + 1);
  }
  function anteriorIngresso() {
    atualizarCarrosselIngresso(indiceIngresso - 1);
  }

  function iniciarReproducaoAutomaticaIngresso() {
    pararReproducaoAutomaticaIngresso();
    temporizadorIngresso = setInterval(proximoIngresso, 6000);
  }
  function pararReproducaoAutomaticaIngresso() {
    if (temporizadorIngresso) clearInterval(temporizadorIngresso);
  }

  if (slidesIngresso.length > 0 && botaoAnterior && botaoProximo) {
    botaoProximo.addEventListener("click", () => {
      proximoIngresso();
      iniciarReproducaoAutomaticaIngresso();
    });
    botaoAnterior.addEventListener("click", () => {
      anteriorIngresso();
      iniciarReproducaoAutomaticaIngresso();
    });

    pontos.forEach((ponto, idx) => {
      ponto.addEventListener("click", () => {
        atualizarCarrosselIngresso(idx);
        iniciarReproducaoAutomaticaIngresso();
      });
    });

    if (recipienteIngresso) {
      recipienteIngresso.addEventListener(
        "mouseenter",
        pararReproducaoAutomaticaIngresso,
      );
      recipienteIngresso.addEventListener(
        "mouseleave",
        iniciarReproducaoAutomaticaIngresso,
      );
    }
    iniciarReproducaoAutomaticaIngresso();
  }

  // ==========================================
  // CARROSSEL 2: OUTROS SHOWS (3 ITENS SIMULTÂNEOS)
  // ==========================================
  const multiSlides = document.querySelectorAll(".multi-slide");
  const multiAnteriorBtn = document.getElementById("multiAnterior");
  const multiProximoBtn = document.getElementById("multiProximo");
  const multiRecipiente = document.querySelector(".recipiente-multi-carrossel");

  let multiIndice = 0;
  let multiTemporizador = null;

  function atualizarMultiCarrossel(indice) {
    multiSlides.forEach((slide) => slide.classList.remove("ativo"));

    if (indice >= multiSlides.length) multiIndice = 0;
    else if (indice < 0) multiIndice = multiSlides.length - 1;
    else multiIndice = indice;

    multiSlides[multiIndice].classList.add("ativo");
  }

  function proximoMulti() {
    atualizarMultiCarrossel(multiIndice + 1);
  }
  function anteriorMulti() {
    atualizarMultiCarrossel(multiIndice - 1);
  }

  function iniciarMultiReproducaoAutomatica() {
    pararMultiReproducaoAutomatica();
    multiTemporizador = setInterval(proximoMulti, 7000); // 7 segundos para leitura dos 3 cards
  }
  function pararMultiReproducaoAutomatica() {
    if (multiTemporizador) clearInterval(multiTemporizador);
  }

  if (multiSlides.length > 0 && multiAnteriorBtn && multiProximoBtn) {
    multiProximoBtn.addEventListener("click", () => {
      proximoMulti();
      iniciarMultiReproducaoAutomatica();
    });
    multiAnteriorBtn.addEventListener("click", () => {
      anteriorMulti();
      iniciarMultiReproducaoAutomatica();
    });

    if (multiRecipiente) {
      multiRecipiente.addEventListener(
        "mouseenter",
        pararMultiReproducaoAutomatica,
      );
      multiRecipiente.addEventListener(
        "mouseleave",
        iniciarMultiReproducaoAutomatica,
      );
    }
    iniciarMultiReproducaoAutomatica();
  }

  // ==========================================
  // FUNÇÕES AUXILIARES DE FORMULÁRIO
  // ==========================================
  function criarTicket(event) {
    event.preventDefault();
    // Gera um número de protocolo aleatório baseado no ano atual
    var protocolo = "FMP" + 2026 + Math.floor(100000 + Math.random() * 900000);
    alert(
      "Chamado aberto com sucesso!\nGuarde seu número de protocolo: " +
        protocolo +
        "\n\nEnviamos uma confirmação para o seu e-mail.",
    );
    event.target.reset();
  }

  function enviarOuvidoria(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso! Retornaremos em até 3 dias úteis. 🎵");
    event.target.reset();
  }
});
