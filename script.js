const ratingNumbers = document.querySelectorAll(".rating");

ratingNumbers.forEach((ratingNumber) => {
  ratingNumber.addEventListener("mouseover", () => {
    ratingNumbers.forEach((number) => {
      number.classList.remove("hover-class");
    });
    ratingNumber.classList.add("hover-class");
  });
  ratingNumber.addEventListener("mouseout", () => {
    ratingNumbers.forEach((number) => {
      number.classList.remove("hover-class");
    });
    ratingNumber.classList.remove("hover-class");
  });

  ratingNumber.addEventListener("click", () => {
    ratingNumbers.forEach((number) => {
      number.classList.remove("active-class");
    });
    ratingNumber.classList.add("active-class");
  });
});

//uložení nakliknutí do proměnné a vepsání do výsledné stránky
const ratingHtml = document.getElementById("youSelected");
ratingNumbers.forEach((rate) => {
  rate.addEventListener("click", () => {
    let ratedNumber = rate.innerHTML;
    ratingHtml.innerHTML = ratedNumber;
  });
});

const submitButton = document.getElementById("submit");

const buttonBack = document.getElementById("btnBack");

const firstPage = document.querySelector(".survey");
const secondPage = document.querySelector(".result");

submitButton.addEventListener("click", () => {
  firstPage.classList.add("hidden");
  secondPage.classList.remove("hidden");
});

buttonBack.addEventListener("click", () => {
  firstPage.classList.remove("hidden");
  secondPage.classList.add("hidden");
});
