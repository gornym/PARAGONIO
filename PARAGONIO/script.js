// panel logowania i rejestracji

const otworzOknoGuzik = document.querySelectorAll(".login");
const okno = document.querySelector(".panel-logowania");
const zamknijOknoGuzik = document.querySelector(".zamknij-panel");
const overlay = document.querySelector(".overlay");

const otworzOkno = function () {
  okno.classList.remove("ukryty");
  overlay.classList.remove("ukryty");
};

const zamknijOkno = function () {
  okno.classList.add("ukryty");
  overlay.classList.add("ukryty");
};

for (let i = 0; i < otworzOknoGuzik.length; i++)
  otworzOknoGuzik[i].addEventListener("click", otworzOkno);

zamknijOknoGuzik.addEventListener("click", zamknijOkno);
overlay.addEventListener("click", zamknijOkno);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !okno.classList.contains("ukryty")) {
    zamknijOkno();
  }
});

// karuzela ze zdjeciami

const slider = function () {
  const sklep = document.querySelectorAll(".sklep");
  const guzikLewy = document.querySelector(".karuzela_guzik--lewe");
  const guzikPrawy = document.querySelector(".karuzela_guzik--prawe");
  const kropka = document.querySelector(".kropka");

  let curSlide = 0;
  const maxSlide = sklep.length;

  const createDots = function () {
    sklep.forEach(function (_, i) {
      kropka.insertAdjacentHTML(
        "beforeend",
        `<button class="kropka_kropka" data-slide="${i}"></button></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".kropka_kropka")
      .forEach((dot) => dot.classList.remove("kropka_kropka--aktywne"));

    document
      .querySelector(`.kropka_kropka[data-slide="${slide}"]`)
      .classList.add("kropka_kropka--aktywne");
  };

  const goToSlide = function (slide) {
    sklep.forEach(
      (s, i) => (s.style.transform = `translateX(${20 * (i - curSlide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  guzikPrawy.addEventListener("click", nextSlide);
  guzikLewy.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  kropka.addEventListener("click", function (e) {
    if (e.target.classList.contains("kropka_kropka")) {
      curSlide = +e.target.dataset.slide;
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
  setInterval(function () {
    nextSlide();
  }, 1500);
};
slider();
