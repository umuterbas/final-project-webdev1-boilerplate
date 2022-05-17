let slides = document.querySelectorAll(".slider__image");
let navLinks = document.querySelectorAll(".slider__navlink");
const nextButton = document.querySelector("#nav-button--next");
const prevButton = document.querySelector("#nav-button--prev");

let currentSlide = 0;

const nextSlide = ()=>{
  (currentSlide == slides.length - 1)? currentSlide = 0 : currentSlide++;
  // console.log(currentSlide);
//   navLinkChange();
  changeSlide();
  resetTimer();
}

const prevSlide = () =>{
  (currentSlide == 0)? currentSlide = slides.length - 1 : currentSlide--;
  // console.log(currentSlide);
//   navLinkChange();
  changeSlide();
  resetTimer();
}

const changeSlide = ()=>{
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[currentSlide].classList.add("active");
}

// const navLinkChange = ()=>{
//   for (i = 0; i < navLinks.length; i++) {
//     navLinks[i].classList.remove("active");
//   }
//   navLinks[currentSlide].classList.add("active");
// }

//Click Events
// nextButton.addEventListener("click", () => {
//   nextSlide();
// });

// prevButton.addEventListener("click", ()=>{
//   prevSlide();
// })

const autoChange = ()=>{
  // console.log("auto");
//   navLinkChange();
  nextSlide();
}

let timer = setInterval(autoChange, 5000);

//when either button or indicator(nav links) are clicked, stop the timer and then start again
const resetTimer = () =>{
  clearInterval(timer);
  timer = setInterval(autoChange, 5000);
}
