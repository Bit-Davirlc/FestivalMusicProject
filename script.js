document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // CARROSSEL 1: TICKETS (SHOWS EM DESTAQUE)
  // ==========================================
  const ticketSlides = document.querySelectorAll(".item");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const ticketContainer = document.querySelector(".ticket-container");

  let ticketIndex = 0;
  let ticketTimer = null;

  function updateTicketCarousel(index) {
    ticketSlides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    if (index >= ticketSlides.length) ticketIndex = 0;
    else if (index < 0) ticketIndex = ticketSlides.length - 1;
    else ticketIndex = index;

    ticketSlides[ticketIndex].classList.add("active");
    dots[ticketIndex].classList.add("active");
  }

  function nextTicket() {
    updateTicketCarousel(ticketIndex + 1);
  }
  function prevTicket() {
    updateTicketCarousel(ticketIndex - 1);
  }

  function startTicketAutoPlay() {
    stopTicketAutoPlay();
    ticketTimer = setInterval(nextTicket, 6000);
  }
  function stopTicketAutoPlay() {
    if (ticketTimer) clearInterval(ticketTimer);
  }

  if (ticketSlides.length > 0 && prevBtn && nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextTicket();
      startTicketAutoPlay();
    });
    prevBtn.addEventListener("click", () => {
      prevTicket();
      startTicketAutoPlay();
    });

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        updateTicketCarousel(idx);
        startTicketAutoPlay();
      });
    });

    if (ticketContainer) {
      ticketContainer.addEventListener("mouseenter", stopTicketAutoPlay);
      ticketContainer.addEventListener("mouseleave", startTicketAutoPlay);
    }
    startTicketAutoPlay();
  }

  // ==========================================
  // CARROSSEL 2: OUTROS SHOWS (3 ITENS SIMULTÂNEOS)
  // ==========================================
  const multiSlides = document.querySelectorAll(".multi-slide");
  const multiPrevBtn = document.getElementById("multiPrev");
  const multiNextBtn = document.getElementById("multiNext");
  const multiContainer = document.querySelector(".multi-carousel-container");

  let multiIndex = 0;
  let multiTimer = null;

  function updateMultiCarousel(index) {
    multiSlides.forEach((slide) => slide.classList.remove("active"));

    if (index >= multiSlides.length) multiIndex = 0;
    else if (index < 0) multiIndex = multiSlides.length - 1;
    else multiIndex = index;

    multiSlides[multiIndex].classList.add("active");
  }

  function nextMulti() {
    updateMultiCarousel(multiIndex + 1);
  }
  function prevMulti() {
    updateMultiCarousel(multiIndex - 1);
  }

  function startMultiAutoPlay() {
    stopMultiAutoPlay();
    multiTimer = setInterval(nextMulti, 7000); // 7 segundos para leitura dos 3 cards
  }
  function stopMultiAutoPlay() {
    if (multiTimer) clearInterval(multiTimer);
  }

  if (multiSlides.length > 0 && multiPrevBtn && multiNextBtn) {
    multiNextBtn.addEventListener("click", () => {
      nextMulti();
      startMultiAutoPlay();
    });
    multiPrevBtn.addEventListener("click", () => {
      prevMulti();
      startMultiAutoPlay();
    });

    if (multiContainer) {
      multiContainer.addEventListener("mouseenter", stopMultiAutoPlay);
      multiContainer.addEventListener("mouseleave", startMultiAutoPlay);
    }
    startMultiAutoPlay();
  }
});
