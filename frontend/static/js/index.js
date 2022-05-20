import { getCountries } from "./countries.js";

export const countries = getCountries();

console.log(countries);

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  if(window.location.href === "./views/Homepage.js"){
    //Get DOM
    let slides = document.querySelectorAll(".slider__image");
  
    let currentSlide = 0;
  
    const nextSlide = ()=>{
      (currentSlide == slides.length - 1)? currentSlide = 0 : currentSlide++;
      changeSlide();
      resetTimer();
    }
    const changeSlide = ()=>{
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      slides[currentSlide].classList.add("active");
    }
  
    const autoChange = ()=>{
      nextSlide();
    }
  
    let timer = setInterval(autoChange, 5000);
  
    //when either button or indicator(nav links) are clicked, stop the timer and then start again
    const resetTimer = () =>{
      clearInterval(timer);
      timer = setInterval(autoChange, 5000);
    }
  }


  // Search
  // const searchBar = document.querySelector("#searchBar");
  // console.log(searchBar);
  // searchBar.addEventListener("keyup", (e)=>{
  //   console.log(e.target.value);
  //   // let inputText = searchBar
  //   // console.log(inputText);
  // })
});
